import {KEY, URL} from '../../../api/base';

export const fetchImages = async page => {
  const response = await fetch(`${URL}${KEY}&per_page=3&page=${page}`);
  const data = await response.json();
  if(response.status >= 400){
    throw new Error(data.errors)
  }
  return data
}

export const fetchImageStats = async id => {
  const response = await fetch(`${URL}/${id}/statistics${KEY}`);
  const data = await response.json();
  if (response.status >= 400) {
    throw new Error(data.errors)
  }
  return data
}