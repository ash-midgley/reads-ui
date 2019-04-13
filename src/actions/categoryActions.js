import { FETCH_CATEGORIES, NEW_CATEGORY, UPDATE_CATEGORY, REMOVE_CATEGORY } from './types';
import axios from 'axios';

const url = 'http://128.199.129.60:5000/api/categories';

export const fetchCategories = () => dispatch => {
  axios.get(url)
  .then(response => {
    dispatch({
      type: FETCH_CATEGORIES,
      payload: response.data
    })
  })
  .catch(error => {
    console.log(error);
  })
};

export const createCategory = postData => dispatch => {
  axios.post(url, postData)
    .then(response => {
      dispatch({
        type: NEW_CATEGORY,
        payload: response.data
      })
    })
    .catch(error => {
      console.log(error);
    })
};

export const updateCategory = postData => dispatch => {
  axios.put(url, postData)
    .then(response => {
      dispatch({
        type: UPDATE_CATEGORY,
        payload: response.data
      })
    })
    .catch(error => {
      console.log(error);
    })
};

export const removeCategory = id => dispatch => {
  axios.delete(url + '/' + id)
    .then(response => {
      dispatch({
        type: REMOVE_CATEGORY,
        payload: response.data
      })
    })
    .catch(error => {
      console.log(error);
    })
};