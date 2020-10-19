import {
  SET_PRE_ABSENCE_LIST,
  SET_PRE_ABSENCE_STATE,
  SET_PRE_ABSENCE_PRE_DATE,
  SET_PRE_ABSENCE_NEXT_DATE,
  INIT_PRE_ABSENCE_DATA,
  SET_PRE_ABSENCE_AUTO_COMPLETE_TEXT,
  SET_PRE_ABSENCE_TEXT
} from "../../action/pre_absence";

const initialState = {
  text: "",
  autoComplete: [],

  preAbsenceList: [],
  state: "외출",
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
  }
};

const preAbsenceReducer = (state = initialState, action) => {
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
    default: {
      return state;
    }
  }
};

export default preAbsenceReducer;
