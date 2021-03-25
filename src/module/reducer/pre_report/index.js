import {
  SET_PRE_REPORT_LIST,
  SET_PRE_REPORT_STATE,
  SET_PRE_REPORT_PRE_DATE,
  SET_PRE_REPORT_NEXT_DATE,
  INIT_PRE_REPORT_DATA,
  SET_PRE_REPORT_AUTO_COMPLETE_TEXT,
  SET_PRE_REPORT_TEXT,
  SET_SELECTED_PRE_REPORT_ID,
  SET_PRE_REPORT_UTILS,
  SET_PRE_REPORT_CALC_DATE,
  SET_PRE_REPORT_CALC_YEAR,
  SET_PRE_REPORT_CALC_MONTH,
  SET_PRE_REPORT_CALC_DAY,
  SET_PRE_REPORT_IS_CLICK_PRE_STATE,
  SET_NAMES,
  DELETE_NAMES,
  SET_REASON,
  SET_TEMP_REASON
} from "../../action/pre_report";

const initialState = {
  text: "",
  autoComplete: [],
  names: [],
  reason: "",
  tempReason: "",

  selectedPreReportId: "",
  preReportList: [],
  state: "외출",
  isClickPreState: "",
  preDate: {
    year: "",
    month: "",
    day: "",
    period: ""
  },
  nextDate: {
    year: "",
    month: "",
    day: "",
    period: ""
  },
  utils: [],
  calcDate: [],
  calc: {
    year: "",
    month: "",
    day: ""
  }
};

const preReportReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PRE_REPORT_TEXT: {
      return {
        ...state,
        text: action.payload
      };
    }
    case SET_PRE_REPORT_AUTO_COMPLETE_TEXT: {
      return {
        ...state,
        autoComplete: action.payload
      };
    }
    case SET_NAMES: {
      return {
        ...state,
        names: action.payload
      };
    }
    case DELETE_NAMES: {
      return {
        ...state,
        names: state.names.filter(name => name !== action.payload)
      };
    }
    case SET_REASON: {
      return {
        ...state,
        reason: action.payload
      };
    }
    case SET_TEMP_REASON: {
      return {
        ...state,
        tempReason: action.payload
      };
    }
    case SET_SELECTED_PRE_REPORT_ID: {
      return {
        ...state,
        selectedPreReportId: action.payload
      };
    }
    case SET_PRE_REPORT_LIST: {
      return {
        ...state,
        preReportList: action.payload
      };
    }
    case SET_PRE_REPORT_STATE: {
      return {
        ...state,
        state: action.payload
      };
    }
    case SET_PRE_REPORT_IS_CLICK_PRE_STATE: {
      return {
        ...state,
        isClickPreState: action.payload
      };
    }
    case SET_PRE_REPORT_PRE_DATE: {
      const { year, month, day, period } = action.payload;
      return {
        ...state,
        preDate: {
          year: year,
          month: month,
          day: day,
          period: period
        }
      };
    }
    case SET_PRE_REPORT_NEXT_DATE: {
      const { year, month, day, period } = action.payload;
      return {
        ...state,
        nextDate: {
          year: year,
          month: month,
          day: day,
          period: period
        }
      };
    }
    case INIT_PRE_REPORT_DATA: {
      return {
        ...state,
        text: "",
        autoComplete: [],
        names: [],
        reason: "",
        tempReason: "",
        state: "외출",
        nextDate: {
          year: "",
          month: "",
          day: "",
          period: ""
        },
        preDate: {
          year: "",
          month: "",
          period: "",
          day: ""
        }
      };
    }
    case SET_PRE_REPORT_UTILS: {
      return {
        ...state,
        utils: action.payload
      };
    }
    case SET_PRE_REPORT_CALC_DATE: {
      return {
        ...state,
        calcDate: action.payload
      };
    }
    case SET_PRE_REPORT_CALC_YEAR: {
      return {
        ...state,
        calc: {
          ...state.calc,
          year: action.payload
        }
      };
    }
    case SET_PRE_REPORT_CALC_MONTH: {
      return {
        ...state,
        calc: {
          ...state.calc,
          month: action.payload
        }
      };
    }
    case SET_PRE_REPORT_CALC_DAY: {
      return {
        ...state,
        calc: {
          ...state.calc,
          day: action.payload
        }
      };
    }
    default: {
      return state;
    }
  }
};

export default preReportReducer;
