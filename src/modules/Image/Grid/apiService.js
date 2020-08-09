import {KEY, URL} from '../../../api/base';
import Axios from 'axios';

export const fetchImages = page => {
  // const response = await fetch(`${URL}${KEY}&per_page=3&page=${page}`);
  // const data = await response.json();
  // if(response.status >= 400){
  //   throw new Error(data.errors)
  // }
  // console.log(data);
  // return data
  return Axios.get(`${URL}${KEY}&per_page=3&page=${page}`).then(res => {
    return res.data
  }).catch(error => {
    throw new Error(error.response.data.errors[0])
  })
}

export const fetchImageStats = async id => {
  const response = await fetch(`${URL}/${id}/statistics${KEY}`);
  const data = await response.json();
  if (response.status >= 400) {
    throw new Error(data.errors)
  }
  return data
}