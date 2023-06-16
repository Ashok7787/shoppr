import * as types from './ReportActionType';
import axios from 'axios';
import {base_url} from '../../Config/Auth';
import store from '../../Store';

/**
 * request for adding a quiz name
 */
 export const addBugReport = (quiz, cb) => dispatch => {
    console.log('name', quiz);
    dispatch({
      type: types.ADD_REPORT_BUG_DESCRIPTION_REQUEST,
    });
  
    axios
      .post(`${base_url}/quiz/save`, quiz)
      .then(res => {
        console.log(res.data);
        // if (res.data.quizName == 'QuizName already exist') {
        //   alert('QuizName already exist');
        // } else {
        //   dispatch(getQuizName(res.data.quizId));
  
          dispatch({
            type: types.ADD_REPORT_BUG_DESCRIPTION_SUCCESS,
            payload: res.data,
          });
          console.log(res.data);
          cb && cb('success');
        // }
      })
      .catch(err => {
        // console.log(err);
        dispatch({
          type: types.ADD_REPORT_BUG_DESCRIPTION_FAILURE,
          payload: err,
        });
        cb && cb('failuer');
      });
  };