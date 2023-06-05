import { combineReducers } from 'redux';
import { productReducer } from '../component/Product/ProductReducer';
/**
 *  All of application reducers import goes here...
 */
const appReducer = combineReducers({
    product: productReducer
});
const rootReducer = (state, action) => {
    return appReducer(state, action);
};

export default rootReducer;
