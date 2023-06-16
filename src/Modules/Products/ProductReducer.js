import * as types from './ProductActionTypes';

const initialState = {
  fetchingFinalizeQuiz: false,
  fetchingFinalizeQuizError: false,
  products: [],

  addingProducts: false,
  addingProductsError: false,

  fetchingHomePageData: false,
  fetchingHomePageDataError: false,
  homePage: {},
};

export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    //GET FINALIZED QUIZ
    case types.GET_PRODUCTS_REQUEST:
      return {...state, fetchingFinalizeQuiz: true};
    case types.GET_PRODUCTS_SUCCESS:
      return {
        ...state,
        fetchingFinalizeQuiz: false,
        products: action.payload,
      };
    case types.GET_PRODUCTS_FAILURE:
      return {
        ...state,
        fetchingFinalizeQuiz: false,
        fetchingFinalizeQuizError: true,
      };

    case types.ADD_PRODUCT_REQUEST:
      return {...state, addingProducts: true};
    case types.ADD_PRODUCT_SUCCESS:
      return {...state, addingProducts: false};
    case types.ADD_PRODUCT_FAILURE:
      return {...state, addingProducts: false, addingProductsError: true};

    case types.GET_HOME_PAGE_DATA_REQUEST:
      return {...state, fetchingHomePageData: true};
    case types.GET_HOME_PAGE_DATA_SUCCESS:
      return {
        ...state,
        fetchingHomePageData: false,
        homePage: action.payload,
      };
    case types.GET_HOME_PAGE_DATA_FAILURE:
      return {
        ...state,
        fetchingHomePageData: false,
        fetchingHomePageDataError: true,
      };

    default:
      return state;
  }
};
