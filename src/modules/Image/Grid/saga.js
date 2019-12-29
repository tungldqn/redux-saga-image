import { put, call, take, all, takeEvery, select, fork } from 'redux-saga/effects';
import { setImages, setError, loadImageStats, setImageStats, setImageStatsError } from './actions';
import { IMAGES } from './constants';
import { fetchImages, fetchImageStats } from './apiService';

const getPage = state => state.image.grid.page;

function* handleImagesLoad() {
  try {
    const page = yield select(getPage);
    const images = yield call(fetchImages, page);
    yield put(setImages(images));
  } catch (error) {
    yield put(setError(error.toString()));
  }
}

function* watchImagesLoad() {
  yield takeEvery(IMAGES.LOAD, handleImagesLoad);
}

function* handleStatsRequest(id) {
  for (let i = 0; i < 3; i++) {
    try {
      yield put(loadImageStats(id));
      const res = yield call(fetchImageStats, id);
      yield put(setImageStats(id, res.downloads.total));
      // image was loaded so we exit the generator
      return true;
    } catch (e) {
      // we just need to retry and dispactch an error
      // if we tried more than 3 times
    }
  }
  yield put(setImageStatsError(id));
}

function* watchStatsRequest(){
  while (true) {
    // we get the action here
    const {images} = yield take(IMAGES.LOAD_SUCCESS);
    for (let i = 0; i < images.length; i++) {
      yield fork(handleStatsRequest, images[i].id);
    }
  }
}

export default function*() {
  yield all([watchImagesLoad(), watchStatsRequest()]);
}