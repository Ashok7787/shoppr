import * as types from './ProductActionTypes';
import store from '../../Store';
import axios from 'axios';
import {base_url} from '../../Config/Auth';

export const addProductToCart = () => dispatch => {
  console.log('name', quiz);
  dispatch({
    type: types.ADD_PRODUCTS_REQUEST,
  });

  axios
    .post(`${base_url}/quiz/save`,)
    .then(res => {
      console.log(res.data);
      
        dispatch(getProductList(res.data.quizId));

        dispatch({
          type: types.ADD_PRODUCTS_SUCCESS,
          payload: res.data,
        });
        cb && cb('success');
    
    })
    .catch(err => {
      // console.log(err);
      dispatch({
        type: types.ADD_PRODUCTS_FAILURE,
        payload: err,
      });
      cb && cb('failuer');
    });
};
export const getProductList = () => dispatch => {
  dispatch({
    type: types.GET_PRODUCTS_REQUEST,
  });
  axios
    .get(`${base_url}/product/productCatalogue`,)
    .then(res => {
      console.log(res.data);
      dispatch({
        type: types.GET_PRODUCTS_SUCCESS,
        payload: res.data,
      });
    })
    .catch(err => {
       console.log(err.response);
      dispatch({
        type: types.GET_PRODUCTS_FAILURE,
        payload: err,
      });
    });
};
