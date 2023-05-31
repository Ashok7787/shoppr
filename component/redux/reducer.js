import * as types from './coonstant';
const initialState = [];
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_TO_CART:
      return [...state, action.data];
      case types.REMOVE_FROM_CART:
        let result =state.filter(item=>{
          return item.name!=action.data
        })
      return [...result];
    default:
      return state;
  }
};
