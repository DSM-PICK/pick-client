import {
  SET_PRE_ABSENCE_LIST,
  SET_PRE_ABSENCE_STATE,
  SET_PRE_ABSENCE_PRE_DATE,
  SET_PRE_ABSENCE_NEXT_DATE,
  INIT_PRE_ABSENCE_DATA,
  SET_PRE_ABSENCE_AUTO_COMPLETE_TEXT,
  SET_PRE_ABSENCE_TEXT,
  SET_SELECTED_PRE_ABSENCE_ID,
  SET_PRE_ABSENCE_UTILS,
  SET_PRE_ABSENCE_CALC_DATE,
  SET_PRE_ABSENCE_CALC_YEAR,
  SET_PRE_ABSENCE_CALC_MONTH,
  SET_PRE_ABSENCE_CALC_DAY,
  SET_PRE_ABSENCE_IS_CLICK_PRE_STATE
} from "../../action/pre_absence";

const initialState = {
  text: "",
  autoComplete: [],

  selectedPreAbsenceId: "",
  preAbsenceList: [],
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
    case SET_PRE_ABSENCE_TEXT: {
      return {
        ...state,
        text: action.payload
      };
    }
    case SET_PRE_ABSENCE_AUTO_COMPLETE_TEXT: {
      return {
        ...state,
        autoComplete: action.payload
      };
    }
    case SET_SELECTED_PRE_ABSENCE_ID: {
      return {
        ...state,
        selectedPreAbsenceId: action.payload
      };
    }
    case SET_PRE_ABSENCE_LIST: {
      return {
        ...state,
        preAbsenceList: action.payload
      };
    }
    case SET_PRE_ABSENCE_STATE: {
      return {
        ...state,
        state: action.payload
      };
    }
    case SET_PRE_ABSENCE_IS_CLICK_PRE_STATE: {
      return {
        ...state,
        isClickPreState: action.payload
      };
    }
    case SET_PRE_ABSENCE_PRE_DATE: {
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
    case SET_PRE_ABSENCE_NEXT_DATE: {
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
    case INIT_PRE_ABSENCE_DATA: {
      return {
        ...state,
        text: "",
        autoComplete: [],
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
    case SET_PRE_ABSENCE_UTILS: {
      return {
        ...state,
        utils: action.payload
      };
    }
    case SET_PRE_ABSENCE_CALC_DATE: {
      return {
        ...state,
        calcDate: action.payload
      };
    }
    case SET_PRE_ABSENCE_CALC_YEAR: {
      return {
        ...state,
        calc: {
          ...state.calc,
          year: action.payload
        }
      };
    }
    case SET_PRE_ABSENCE_CALC_MONTH: {
      return {
        ...state,
        calc: {
          ...state.calc,
          month: action.payload
        }
      };
    }
    case SET_PRE_ABSENCE_CALC_DAY: {
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
