import * as types from './CartActionTypes';
import axios from 'axios';
import {base_url} from '../../Config/Auth';
import store from '../../Store';

//const history = createBrowserHistory();


export const getCancelOrder = (orderId,data) => (dispatch) => {
  dispatch({
    type: types.GET_CANCEL_ORDER_REQUEST,
  });
  axios
    .put(`${base_url}/order/cancel/${orderId}`, data,{
    })
    .then((res) => {
    
      dispatch({
        type: types.GET_CANCEL_ORDER_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {

      dispatch({
        type: types.GET_CANCEL_ORDER_FAILURE,
        payload: err,
      });
    });
};

export const handleRazorPayModal = (modalProps) => dispatch => {
  dispatch({
      type: types.HANDLE_RAZOR_PAY_MODAL,
      payload: modalProps
  })
}

export const handleStripeModal = (modalProps) => dispatch => {
  dispatch({
      type: types.HANDLE_STRIPE_MODAL,
      payload: modalProps
  })
}

export const addPlaceOrder = (data,cartId) => (dispatch) => {
  dispatch({ type: types.ADD_PLACE_ORDER_REQUEST });

  axios
    .post(`${base_url}/checkout/cart/submitOrder/${cartId} `, data, {
      headers: {
        Authorization: "Bearer " + sessionStorage.getItem("token") || "",
      },
    })

    .then((res) => {
  if(res.data){
    const value = localStorage.getItem('cartId') 
const final=JSON.parse(value)
    // history.push(`${final.shopName}/ordersucess}`)
    localStorage.removeItem('cartId') 
  }      
  dispatch({
        type: types.ADD_PLACE_ORDER_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
    
      dispatch({
        type: types.ADD_PLACE_ORDER_FAILURE,
      });
    });
};

//FillDeliveryInformation post
export const addDeliveryInfo = (data,cartId,cb) => (dispatch) => {
  dispatch({
    type: types.ADD_DELIVERY_INFO_REQUEST,
  });
  axios
    .post(`${base_url}/checkout/cart/attachshippingAddress/${cartId}`, data)
    .then((res) => {
    
      dispatch({
        type: types.ADD_DELIVERY_INFO_SUCCESS,
        payload: res.data
      })
      cb && cb("sucess",res.data.length&&res.data[0].cartId)
    })
    .catch((err) => {
   
      dispatch({
        type: types.ADD_DELIVERY_INFO_FAILURE,
        payload: err,
      })
    })
}

//trackOrder
export const addTrackOrder = (data, cb) => (dispatch) => {
 
  dispatch({
    type: types.TRACK_ORDER_STATUS_REQUEST,
  });
  axios.post(`${base_url}/order/today-orderList`, data)
    .then((res) => {
      
     

      dispatch({
        // history.push("/shopName/ordermaincontent");
        type: types.TRACK_ORDER_STATUS_SUCCESS,
        payload: res.data
      })
      // history.push("/shopName/ordermaincontent")
      cb && cb("sucess",res.data.length&&res.data[0].orderId)
    })
    .catch((err) => {
    
      cb && cb("failure");
       
        message.error("Order is Cancelled");
      
      dispatch({
        type: types.TRACK_ORDER_STATUS_FAILURE,
        payload: err,
      })
     
    })
}

// trackOrderStatus

export const getOrderStatus = (orderId) => (dispatch) => {
  dispatch({
    type: types.GET_ORDER_STATUS_REQUEST,
  });
  axios
    .get(`${base_url}/order/trackOrder/${orderId}`, {
    })
    .then((res) => {
   
      dispatch({
        type: types.GET_ORDER_STATUS_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
   
      dispatch({
        type: types.GET_ORDER_STATUS_FAILURE,
        payload: err,
      });
    });
};

export const getCustomerProductList = (pathname) => (dispatch) => {
  dispatch({
    type: types.GET_CUSTOMER_LIST_REQUEST,
  });
  axios
    .post(`${base_url}/user/shop?shopLink=${pathname}`, {
      headers: {
        Authorization: "Bearer " + sessionStorage.getItem("token") || "",
      },
    })
    .then((res) => {
   
      dispatch({
        type: types.GET_CUSTOMER_LIST_SUCCESS,
        payload: res.data,
      });
      // window.location.path()
    })
    .catch((err) => {
     
      dispatch({
        type: types.GET_CUSTOMER_LIST_FAILURE,
        payload: err,
      });
    });
};

export const inputCustomerProductDataSearch = (merchantId,productName) => (dispatch) => {
  dispatch({
    type: types.INPUT_CUSTOMER_PRODUCT_SEARCH_DATA_REQUSET,
  });
  axios
    .get(`${base_url}/product/productSearch/${merchantId}/${productName}`, { 
      headers: {
        Authorization: "Bearer " + sessionStorage.getItem("token") || "",
      },
    })
    .then((res) => {
      dispatch({
        type: types.INPUT_CUSTOMER_PRODUCT_SEARCH_DATA_SUCCESS,
        payload: res.data,
      });
      // {res.data.message ? 
      //   message.info(res.data.message)
      //   :null
      //   }
    })

    .catch((err) => {
      dispatch({
        type: types.INPUT_CUSTOMER_PRODUCT_SEARCH_DATA_FAILURE,
        payload: err,
      });
    });
};

export const LinkProductInfo = (data,shopName) => (dispatch) => {
  dispatch({ type: types.LINK_PRODUCT_INFO_REQUEST });

  axios
    .post(`${base_url}/checkout/cart/add `, data, {
      headers: {
        Authorization: "Bearer " + sessionStorage.getItem("token") || "",
      },
    })

    .then((res) => {
      const final={cartId:res.data.storeCart.cartId,shopName}
     
      localStorage.setItem("cartId",JSON.stringify(final))
      dispatch({
        type: types.LINK_PRODUCT_INFO_SUCCESS,
        payload: res.data,
      });
      message.success("Product has been added to cart")
    })
    .catch((err) => {
    
      dispatch({
        type: types.LINK_PRODUCT_INFO_FAILURE,
      });
    });
};

export const getCartProductList = (cartId) => (dispatch) => {
  dispatch({
    type: types.GET_CART_LIST_REQUEST,
  });
  axios
    .get(`${base_url}/checkout/cart/${cartId}`, {
      headers: {
        Authorization: "Bearer " + sessionStorage.getItem("token") || "",
      },
    })
    .then((res) => {
      
      dispatch({
        type: types.GET_CART_LIST_SUCCESS,
        payload: res.data,
      });
     
    })
    .catch((err) => {
   
      dispatch({
        type: types.GET_CART_LIST_FAILURE,
        payload: err,
      });
    });
};

export const getShopName = (pathname) => (dispatch) => {
  console.log(pathname)
  dispatch({
    type: types.GET_SHOP_NAME_REQUEST,
  });
  axios
    .get(`${base_url}/user/merchant/shop?shopLink=${pathname}`, {
      headers: {
        Authorization: "Bearer " + sessionStorage.getItem("token") || "",
      },
    })
    .then((res) => {
    
      dispatch({
        type: types.GET_SHOP_NAME_SUCCESS,
        payload: res.data,
      });
      // window.location.path()
     
    })
    .catch((err) => {

      dispatch({
        type: types.GET_SHOP_NAME_FAILURE,
        payload: err,
      });
    });
};

export const updateCart = (data,cartId) => (dispatch) => {
  dispatch({ type: types.UPDATE_CART_REQUEST });

  axios
    .post(`${base_url}/checkout/cart/update/${cartId} `, data, {
      headers: {
        Authorization: "Bearer " + sessionStorage.getItem("token") || "",
      },
    })

    .then((res) => {
     
      dispatch({
        type: types.UPDATE_CART_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
  
      dispatch({
        type: types.UPDATE_CART_FAILURE,
      });
    });
};

export const getSortBy = (pathname,type) => (dispatch) => {
  dispatch({
    type: types.GET_SORT_BY_REQUEST,
  });
  axios
    .get(`${base_url}/product/sort?shopLink=${pathname}&type=${type}`, {
      headers: {
        Authorization: "Bearer " + sessionStorage.getItem("token") || "",
      },
    })
    .then((res) => {
      
      dispatch({
        type: types.GET_SORT_BY_SUCCESS,
        payload: res.data,
      });
       window.location.path()
    })
    .catch((err) => {
  
      dispatch({
        type: types.GET_SORT_BY_FAILURE,
        payload: err,
      });
    });
};

export const deleteCartData = (cartId,itemId) => (dispatch) => {
  
  dispatch({
    type: types.DELETE_CART_DATA_REQUEST,
  });
  axios
    .delete(`${base_url}/checkout/cart/remove/${cartId}/${itemId}` ,{
      headers: {
        Authorization: "Bearer " + sessionStorage.getItem("token") || "",
      },
    })
    .then((res) => {

      const a=res.data.storeCart.hasOwnProperty('cartItems');
      console.log(a)
      let finalvalue=null
if (a){
  finalvalue=res.data 
} else {
  console.log("else")
  finalvalue={storeCart:{...res.data.storeCart,cartItems:[]}}
}
const value = localStorage.getItem('cartId') 
const final=JSON.parse(value)
    // history.push (final.shopName)
     if (a){
      message.success("Item Deleted Successfully")
     } else
     {
      window.location.reload()
     }
      dispatch({
        type: types.DELETE_CART_DATA_SUCCESS,
      payload: finalvalue,
      });
    })
    .catch((err) => {
     
      dispatch({
        type: types.DELETE_CART_DATA_FAILURE,
        payload: err,
      });
    });
};

export const makePayment = (data,cb) => dispatch => {
  dispatch({
      type: types.MAKE_PAYMENT_REQUEST,
  })
 
   axios.post(`${base_url}/Stripe/confirmPayment`,data ,{
   headers: {
        Authorization: "Bearer " + sessionStorage.getItem("token") || "",
      },
    })
   
      .then(res => {
        
          dispatch({
              type: types.MAKE_PAYMENT_SUCCESS,
              payload: res.data
          })
          if(res.data.message === 'status failed')
          {
          cb && cb('status failed',res.data.name)
          console.log("act",res.data.name)
          }else{
            cb && cb('success',res.data.storecartResponse.storeCart.orderNumber,res.data.storecartResponse.storeCart.merchantInfo.name)
            data.strpePaymentInd && localStorage.removeItem('cartId') } 

      })
        
      .catch(err => {

          dispatch({
              type: types.MAKE_PAYMENT_FAILURE,
              payload: err
          })
          cb && cb('error')
      })

}

export const getPaymentId = (data, cb) => dispatch => {
  dispatch({
    type: types.GET_PAYMENT_ID_REQUEST
  });

  axios
    .post(`${base_url}/Stripe/makePayment`, data, {})
    .then(res => {
   
      dispatch({
        type: types.GET_PAYMENT_ID_SUCCESS,
        payload: res.data
      });
      cb && cb("success");
    })
    .catch(err => {
  
      dispatch({
        type: types.GET_PAYMENT_ID_FAILURE,
        payload: err
      });
      cb && cb("error");
    });
};

export const UpdateDeliveryInfo = (data, cartId,cb) => (
  dispatch
) => {
  dispatch({
    type: types.UPDATE_DELIVERY_INFO_REQUEST,
  });
  axios
    .put(`${base_url}/checkout/cart/updateShippingAddress/${cartId}`,data)
    .then((res) => {
      dispatch({
        type: types.UPDATE_DELIVERY_INFO_SUCCESS,
        payload: res.data,
      });
      cb && cb("success")
    })
    .catch((err) => {

      dispatch({
        type: types.UPDATE_DELIVERY_INFO_FAILURE,
        payload: err,
      });
      cb &&cb()
    });
};

export const getDeliveryInfo = (cartId) => (dispatch) => {
  dispatch({
    type: types.GET_DELIVERY_INFO_REQUEST,
  });
  axios
    .get(`${base_url}/checkout/cart/${cartId}`, {
    })
    .then((res) => {
   
      dispatch({
        type: types.GET_DELIVERY_INFO_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
    
      dispatch({
        type: types.GET_DELIVERY_INFO_FAILURE,
        payload: err,
      });
    });
};

export const getRazorPayDetails = (data, cb) => dispatch => {
  dispatch({
    type: types.GET_RAZOR_PAY_DETAILS_REQUEST
  });

  axios
    .post(`${base_url}/razorPay/order`, data, {})
    .then(res => {
   
      dispatch({
        type: types.GET_RAZOR_PAY_DETAILS_SUCCESS,
        payload: res.data
      });
      cb && cb("success");
    })
    .catch(err => {
  
      dispatch({
        type: types.GET_RAZOR_PAY_DETAILS_FAILURE,
        payload: err
      });
      cb && cb("error");
    });
};