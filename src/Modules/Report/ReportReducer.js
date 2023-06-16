import * as types from './ReportActionType';

const initialState = {
    addingReportDescription:false,
    addingReportDescriptionError: false,

};
export const reportReducer = (state = initialState, action) => {
    switch (action.type) {
  // add report description
  case types.ADD_REPORT_BUG_DESCRIPTION_REQUEST:
    return {...state, addingReportDescription: true};
  case types.ADD_REPORT_BUG_DESCRIPTION_SUCCESS:
    return {...state, addingReportDescription: false};
  case types.ADD_REPORT_BUG_DESCRIPTION_FAILURE:
    return {...state, addingReportDescription: false, addingReportDescriptionError: true};
     default:
      return state;
  }
};