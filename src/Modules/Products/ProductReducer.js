import * as types from './ProductActionTypes';

const initialState = {
 
  fetchingFinalizeQuiz: false,
  fetchingFinalizeQuizError: false,
  products: [],

  
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

      
    default:
      return state;
  }
};
