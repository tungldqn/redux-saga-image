import {combineReducers} from 'redux';
import {IMAGES, STATS} from './constants';

const list = (state = [], action) => {
  switch (action.type) {
    case IMAGES.LOAD_SUCCESS:
      return [...state, ...action.images]
    default:
      return state
  }
}

const page = (state = 1, action) => {
  switch (action.type) {
    case IMAGES.LOAD_SUCCESS:
      return state + 1;
    default:
      return state
  }
}

const error = (state = null, action) => {
  switch (action.type) {
    case IMAGES.LOAD_FAIL:
      return action.error
    case IMAGES.LOAD:
    case IMAGES.LOAD_SUCCESS:
      return null
    default:
      return state
  }
}

const loading = (state = false, action) => {
  switch (action.type) {
    case IMAGES.LOAD:
      return true;
    case IMAGES.LOAD_SUCCESS:
      return false;
    case IMAGES.LOAD_FAIL:
      return false;
    default:
      return state;
  }
}

const stats = (state = {}, action) => {
  switch (action.type) {
    case STATS.LOAD:
      return {
        ...state,
        [action.id]: {
          isLoading: true,
          downloads: null,
          error: false,
        },
      };
    case STATS.LOAD_SUCCESS:
      return {
        ...state,
        [action.id]: {
          isLoading: false,
          downloads: action.downloads,
          error: false,
        },
      };
    case STATS.LOAD_FAIL:
      return {
        ...state,
        [action.id]: {
          isLoading: false,
          downloads: null,
          error: true,
        },
      };
    default:
      return state;
  }
}

export default combineReducers({
  list,
  page,
  error,
  loading,
  stats
})