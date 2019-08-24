import {IMAGES, STATS} from './constants';

export const loadImages = () => ({
  type: IMAGES.LOAD
})

export const setImages = images => ({
  type: IMAGES.LOAD_SUCCESS,
  images
})

export const setError = error => ({
  type: IMAGES.LOAD,
  error
})

export const loadImageStats = id => ({
  type: STATS.LOAD,
  id
});

export const setImageStats = (id, downloads) => ({
  type: STATS.LOAD_SUCCESS,
  id,
  downloads
});

export const setImageStatsError = id => ({
  type: STATS.LOAD_FAIL,
  id
});