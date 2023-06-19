import { combineReducers } from 'redux';
// import { LOGOUT } from '../Module/Auth/AuthActionTypes';
// import AsyncStorage from '@react-native-community/async-storage';
import { authReducer } from '../Modules/Auth/AuthReducer';
import { quizReducer } from '../Modules/Quiz/QuizReducer';
import { productReducer } from '../Modules/Products/ProductReducer';
import {cartReducer} from '../Modules/Cart/CartReducer';

/**
 *  All of application reducers import goes here...
 */
const appReducer = combineReducers({
    auth: authReducer,
    quiz: quizReducer,
    products: productReducer,
    cart: cartReducer,
});

const rootReducer = (state, action) => {
    return appReducer(state, action);
};

export default rootReducer;
