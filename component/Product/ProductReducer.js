import * as types from './ProductActionTypes';
const initialState = {
  addingQuizName: false,
   addingQuizNameError: false,

   fetchingQuizName:false,
   fetchingQuizNameError:false,
   products: [],
};
export const productReducer  = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_PRODUCTS_REQUEST:
      return {...state, addingQuizName: true};
    case types.ADD_PRODUCTS_SUCCESS:
      return {...state, addingQuizName: false};
    case types.ADD_PRODUCTS_FAILURE:
      return {...state, addingQuizName: false, addingQuizNameError: true};
    case types.GET_PRODUCTS_REQUEST:
      return {...state, fetchingQuizName: true};
    case types.GET_PRODUCTS_SUCCESS:
      return {...state, fetchingQuizName: false, products: action.payload};
    case types.GET_PRODUCTS_FAILURE:
      return {
        ...state,
        fetchingQuizName: false,
        fetchingQuizNameError: true,
      };
    default:
      return state;
  }
};
