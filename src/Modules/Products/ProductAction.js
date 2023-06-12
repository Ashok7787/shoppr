import * as types from './ProductActionTypes';
import axios from 'axios';
import {base_url} from '../../Config/Auth';
import store from '../../Store';

export const getAllProducts = () => dispatch => {
  dispatch({
    type: types.GET_PRODUCTS_REQUEST,
  });
  axios
    .get(`${base_url}/productSearch/product/customerProduct`, {
      headers: {
        Authorization: 'Bearer ' + store.getState().auth.token || '',
      },
    })
    .then(res => {
      //  console.log(res.data);
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

export const addProductToCart = () => dispatch => {
  dispatch({
    type: types.ADD_PRODUCT_REQUEST,
  });

  axios
    .post(`${base_url}/checkout/cart/add`,)
    .then(res => {      
      console.log(res.data);
      dispatch({
        type: types.ADD_PRODUCT_SUCCESS,
        payload: res.data,
      });
    })
    .catch(err => {
      console.log(err.data);
      dispatch({
        type: types.ADD_PRODUCT_FAILURE,
        payload: err,
      });
    });
};

//home page data

export const getHomePageData = () => dispatch => {
  dispatch({
    type: types.GET_HOME_PAGE_DATA_REQUEST,
  });
  axios
    .get(`${base_url}/merchant/getHomePage`, {
      headers: {
        Authorization: 'Bearer ' + store.getState().auth.token || '',
      },
    })
    .then(res => {
      //  console.log(res.data);
      dispatch({
        type: types.GET_HOME_PAGE_DATA_SUCCESS,
        payload: res.data,
      });
    })
    .catch(err => {
    //  console.log(err.response);
      dispatch({
        type: types.GET_HOME_PAGE_DATA_FAILURE,
        payload: err,
      });
    });
};