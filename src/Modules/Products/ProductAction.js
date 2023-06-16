import * as types from './ProductActionTypes';
import axios from 'axios';
import {base_url} from '../../Config/Auth';
import store from '../../Store';
import AsyncStorage from '@react-native-async-storage/async-storage';
export const getAllProducts = () => dispatch => {
  dispatch({
    type: types.GET_PRODUCTS_REQUEST,
  });
  axios
    .get(`${base_url}/productSearch/product/customerProduct`, {
      // headers: {
      //   Authorization: 'Bearer ' + store.getState().auth.token || '',
      // },
    })
    .then(res => {
      //  console.log(res.data);
      dispatch({
        type: types.GET_PRODUCTS_SUCCESS,
        payload: res.data,
      });
    })
    .catch(err => {
      console.log("new",err.response);
      dispatch({
        type: types.GET_PRODUCTS_FAILURE,
        payload: err,
      });
    });
};

export const addProductToCart = (data,shopName) => dispatch => {
  dispatch({
    type: types.ADD_PRODUCT_REQUEST,
  });

  axios
    .post(`${base_url}/checkout/cart/add`,data ,{
      headers: {
        Authorization: 'Bearer ' + AsyncStorage.getItem("token")|| '',
      },})
    .then(res => {    
      const final={cartId:res.data.storeCart.cartId,shopName}
     
      AsyncStorage.setItem("cartId",JSON.stringify(final))  
      console.log("data",res.data);
      dispatch({
        type: types.ADD_PRODUCT_SUCCESS,
        payload: res.data,
      });
    })
    .catch(err => {
      console.log("add",err.data);
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