import { combineReducers } from 'redux';
// import { LOGOUT } from '../Module/Auth/AuthActionTypes';
// import AsyncStorage from '@react-native-community/async-storage';
import { authReducer } from '../Modules/Auth/AuthReducer';
import { quizReducer } from '../Modules/Quiz/QuizReducer';
import { productReducer } from '../Modules/Products/ProductReducer';

/**
 *  All of application reducers import goes here...
 */
const appReducer = combineReducers({
    auth: authReducer,
    quiz: quizReducer,
    products: productReducer
});

const rootReducer = (state, action) => {
    return appReducer(state, action);
};

export default rootReducer;
