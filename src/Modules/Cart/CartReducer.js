import * as types from "./CartActionTypes";
// import * as MockProuct from './PRODUCT_MOCK.json'


const initialState = {

  fetchingCancelOrder: false,
  fetchingCancelOrderError: false,
  cancelOrder: [],

  fetchingCustomerProductInputSearchData: false,
  fetchingCustomerProductInputSearchDataError: false,
  customerSrchdata: [],

  addingDeliveryInfo: false,
  addingDeliveryInfoError: false,
  deliveryInfo: {},

  trackingOrder: false,
  trackingOrderError: false,
  trackingOrderData: [],

  fetchingTrackedOrderList: false,
  fetchingTrackedOrderListError: false,
  trackedOrder: [],

  linkingProductInfo: false,
  linkingProductInfoError: false,
  productInfo: [],

  fetchingCustomerList: false,
  fetchingCustomerListError: false,
  customer: [],

  fetchingShopName: false,
  fetchingShopNameError: false,
  shopName: {},

  fetchingCartList: false,
  fetchingCartListError: false,
  cart: {},

  placeOrder: false,
  placeOrderError: false,
  placedOrderData: null,

  fetchingSortBy: false,
  fetchingSortByError: false,

  fetchingDeletedCart:false,
  fetchingDeletedCartError:false,
  deletedCart:[],
  addStripeModal:false,

  addingMakePayment: false,
  addingMakePaymentError: false,
  confirmedPayment: {},

  addingPaymentId:false,
  addingPaymentIdError:false,
  paymentDetails:{},

addingRazorPayDetails:false,
addingRazorPayDetailsError:false,
  razorpayDetails:{},

  updatingDeliveryInfo: false,
  updatingDeliveryInfoError: false,
  updateDeliveryInfo:{},

  addRazorPayModal:false,

  fetchingDeliveryInfo: false,
  fetchingDeliveryInfoError: false,
  showDeliveryInfo:{},
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {

    case types.GET_CANCEL_ORDER_REQUEST:
      return { ...state, fetchingCancelOrder: true };
    case types.GET_CANCEL_ORDER_SUCCESS:
      return {
        ...state,
        fatchingCancelOrder: false,
        cancelOrder: action.payload,
      };
    case types.GET_CANCEL_ORDER_FAILURE:
      return { ...state, fetchingCancelOrder: false };

    //FillDeliveryInformation post
    case types.ADD_DELIVERY_INFO_REQUEST:
      return { ...state, addingDeliveryInfo: true };
    case types.ADD_DELIVERY_INFO_SUCCESS:
      return { ...state, addingDeliveryInfo: false, 
        deliveryInfo: action.payload, 
      };
    case types.ADD_DELIVERY_INFO_FAILURE:
      return { ...state, addingDeliveryInfo: false, addingDeliveryInfoError: true };

    case types.TRACK_ORDER_STATUS_REQUEST:
      return { ...state, trackingOrder: true };
    case types.TRACK_ORDER_STATUS_SUCCESS:
      return { ...state, trackingOrder: false, trackingOrderData: action.payload };
    case types.TRACK_ORDER_STATUS_FAILURE:
      return { ...state, trackingOrder: false, trackingOrderError: true };

    case types.GET_ORDER_STATUS_REQUEST:
      return { ...state, fetchingCancelOrder: true };
    case types.GET_ORDER_STATUS_SUCCESS:
      return {
        ...state,
        fatchingCancelOrder: false,
        cancelOrder: action.payload,
      };
    case types.GET_ORDER_STATUS_FAILURE:
      return { ...state, fetchingCancelOrder: false };


    case types.GET_CUSTOMER_LIST_REQUEST:
      return { ...state, fetchingCustomerList: true };
    case types.GET_CUSTOMER_LIST_SUCCESS:
      return {
        ...state,
        fetchingCustomerList: false,
        customer: action.payload,
      };
    case types.GET_CUSTOMER_LIST_FAILURE:
      return {
        ...state,
        fetchingCustimerList: false,
        fetchingCustomerListError: true,
      };

    case types.INPUT_CUSTOMER_PRODUCT_SEARCH_DATA_REQUSET:
      return { ...state, fetchingCustomerProductInputSearchData: true };
    case types.INPUT_CUSTOMER_PRODUCT_SEARCH_DATA_SUCCESS:
      return {
        ...state,
        fetchingCustomerProductInputSearchData: false,
        customerSrchdata: action.payload,
        // serachedData: action.payload,
      };

    case types.INPUT_CUSTOMER_PRODUCT_SEARCH_DATA_FAILURE:
      return { ...state, fetchingCustomerProductInputSearchDataError: true };


    case types.LINK_PRODUCT_INFO_REQUEST:
      return {
        ...state,
        linkingProductInfo: true,
      };
    case types.LINK_PRODUCT_INFO_SUCCESS:
      return {
        ...state,
        linkingProductInfo: false,
        productInfo: action.payload,
        //   addRecruiterModal:false,
        //   recruitByOpportunityId: state.recruitByOpportunityId.map(
        //     (recruit, i) => {
        //       if (recruit.profileId === action.payload.profileId) {
        //         return action.payload;
        //       } else {
        //         return recruit;
        //       }
        //     }
        //   ),
      };
    case types.LINK_PRODUCT_INFO_FAILURE:
      return {
        ...state,
        // addRecruiterModal:false,
        linkingProductInfo: false,
        linkingProductInfoError: true,
      };


    case types.GET_CART_LIST_REQUEST:
      return { ...state, fetchingCartList: true };
    case types.GET_CART_LIST_SUCCESS:
      return {
        ...state,
        fetchingCartList: false,
        productInfo: action.payload,
        cart:action.payload,
      };
    case types.GET_CART_LIST_FAILURE:
      return {
        ...state,
        fetchingCartList: false,
        fetchingCartListError: true,
      };

    case types.ADD_PLACE_ORDER_REQUEST:
      return { ...state, placeOrder: true };
    case types.ADD_PLACE_ORDER_SUCCESS:
      return { ...state, placeOrder: false, placedOrderData: action.payload };
    case types.ADD_PLACE_ORDER_FAILURE:
      return { ...state, placeOrder: false, placeOrderError: true };

    case types.GET_SHOP_NAME_REQUEST:
      return { ...state, fetchingShopName: true };
    case types.GET_SHOP_NAME_SUCCESS:
      return {
        ...state,
        fetchingShopName: false,
        shopName: action.payload,
      };
    case types.GET_SHOP_NAME_FAILURE:
      return {
        ...state,
        fetchingShopName: false,
        fetchingShopNameError: true,
      };

    case types.UPDATE_CART_REQUEST:
      return {
        ...state,
        updatingCart: true,
      };
    case types.UPDATE_CART_SUCCESS:
      return {
        ...state,
        updatingCart: false,
        cart: action.payload,
        //   addRecruiterModal:false,
        //   recruitByOpportunityId: state.recruitByOpportunityId.map(
        //     (recruit, i) => {
        //       if (recruit.profileId === action.payload.profileId) {
        //         return action.payload;
        //       } else {
        //         return recruit;
        //       }
        //     }
        //   ),
      };
    case types.UPDATE_CART_FAILURE:
      return {
        ...state,
        // addRecruiterModal:false,
        updatingCart: false,
        updatingCartError: true,
      };


    case types.GET_SORT_BY_REQUEST:
      return { ...state, fetchingSortBy: true };
    case types.GET_SORT_BY_SUCCESS:
      return {
        ...state,
        fetchingSortBy: false,
        customer: action.payload,
      };
    case types.GET_SORT_BY_FAILURE:
      return {
        ...state,
        fetchingSortBy: false,
        fetchingSortByError: true,
      };


      case types.HANDLE_RAZOR_PAY_MODAL:
        return { ...state, addRazorPayModal: action.payload };


      case types.DELETE_CART_DATA_REQUEST:
        return { ...state, fetchingDeletedCart: true };
      case types.DELETE_CART_DATA_SUCCESS:
        return {
          ...state,
          fetchingDeletedCart: false,
          cart: action.payload,
        };
      case types.DELETE_CART_DATA_FAILURE:
        return {
          ...state,
          fetchingDeletedCart: false,
          fetchingDeletedCartError: true,
        };

        case types.HANDLE_STRIPE_MODAL:
      return { ...state, addStripeModal: action.payload };

      case types.MAKE_PAYMENT_REQUEST:
        return { ...state, addingMakePayment: true };
      case types.MAKE_PAYMENT_SUCCESS:
        return {
          ...state,
          addingMakePayment: false,
            addStripeModal:false,

            confirmedPayment: action.payload
        };
      case types.MAKE_PAYMENT_FAILURE:
        return {
          ...state,
          addingMakePayment: false,
          addingMakePaymentError: true
        };

        case types.GET_RAZOR_PAY_DETAILS_REQUEST:
          return { ...state, addingRazorPayDetails: true };
        case types.GET_RAZOR_PAY_DETAILS_SUCCESS:
          return {
            ...state,
            addingRazorPayDetails: false,
            razorpayDetails: action.payload
          };
        case types.GET_RAZOR_PAY_DETAILS_FAILURE:
          return { ...state, addingRazorPayDetails: false, addingRazorPayDetailsError: true };

        case types.GET_PAYMENT_ID_REQUEST:
      return { ...state, addingPaymentId: true };
    case types.GET_PAYMENT_ID_SUCCESS:
      return {
        ...state,
        addingPaymentId: false,
        paymentDetails: action.payload
      };
    case types.GET_PAYMENT_ID_FAILURE:
      return { ...state, addingPaymentId: false, addingPaymentIdError: true };
      
      case types.UPDATE_DELIVERY_INFO_REQUEST:
        return { ...state, updatingDeliveryInfo: true };
      case types.UPDATE_DELIVERY_INFO_SUCCESS:
        return {
          ...state,
          updatingDeliveryInfo: false,
         
          showDeliveryInfo: {storeCart:{...state.showDeliveryInfo.storeCart,shippingAddress:action.payload}},
          deliveryInfo: {storeCart:{...state.deliveryInfo.storeCart,shippingAddress:action.payload}}
          // {storeCart...state.showDeliveryInfo,shippingAddress:action.payload}
           
        
        };
      case types.UPDATE_DELIVERY_INFO_FAILURE:
        return {
          ...state,
          updatingDeliveryInfo: false,
          updatingDeliveryInfoError: true,
        };

        case types.GET_DELIVERY_INFO_REQUEST:
          return { ...state, fetchingDeliveryInfo: true };
        case types.GET_DELIVERY_INFO_SUCCESS:
          return {
            ...state,
            fetchingDeliveryInfo: false,
            showDeliveryInfo: action.payload,
          };
        case types.GET_DELIVERY_INFO_FAILURE:
          return { ...state, fetchingDeliveryInfo: false,
            fetchingDeliveryInfoError: true, };
    default:
      return state;
  }
};