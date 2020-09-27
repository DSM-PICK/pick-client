import {
  SET_PRE_REPORT_STATE,
  SET_PRE_REPORT_STD_NAME,
  SET_PRE_REPORT_PRE_DATE,
  SET_PRE_REPORT_NEXT_DATE
} from "../../action/pre_report";

const initialState = {
  preReportState: "외출",
  preReportStdName: "",
  preReportPreDate: "",
  preReportNextDate: ""
};

const preReportReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PRE_REPORT_STATE: {
      return {
        ...state,
        preReportState: action.payload
      };
    }
    case SET_PRE_REPORT_STD_NAME: {
      return {
        ...state,
        preReportStdName: action.payload
      };
    }
    case SET_PRE_REPORT_PRE_DATE: {
      return {
        ...state,
        preReportPreDate
      };
    }
    case SET_PRE_REPORT_NEXT_DATE: {
      return {
        ...state,
        preReportNextDate
      };
    }
    default: {
      return state;
    }
  }
};

export default preReportReducer;
