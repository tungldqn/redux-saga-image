import { all } from 'redux-saga/effects';
import gridSaga from './Grid/saga';

export default function*(){
    yield all([gridSaga()])
}