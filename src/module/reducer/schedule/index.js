import {
  GET_SCHEDULE_MINI_CALANDER_SUCCESS,
  GET_SCHEDULE_SUCCESS,
  RESET_SCHEDULE_SELECT,
  SET_CHANGE_MODE,
  SET_DATE,
  SET_DATE_MINI_CALANDER,
  SET_FIRST_SELECT,
  SET_SECOND_SELECT,
  SET_SELECTED_DATE,
  SET_TODAY_SCHEDULE
} from "../../action/schedule";

const initialState = {
  mini: {
    calander: [],
    date: {
      year: 0,
      month: 0
    }
  },
  calander: {
    calander: [],
    date: {
      year: 0,
      month: 0
    }
  },
  selected: {
    year: 0,
    month: 0,
    date: 0
  },
  todaySchedule: "",
  isChangeMode: false,
  firstSelect: null,
  secondSelect: null
};

const scheduleReducer = (state = initialState, action) => {
  switch (action.type) {
    case RESET_SCHEDULE_SELECT: {
      return {
        ...state,
        isChangeMode: false,
        firstSelect: null,
        secondSelect: null
      };
    }
    case SET_SECOND_SELECT: {
      return {
        ...state,
        secondSelect: action.payload
      };
    }
    case SET_FIRST_SELECT: {
      return {
        ...state,
        firstSelect: action.payload
      };
    }
    case SET_CHANGE_MODE: {
      return {
        ...state,
        isChangeMode: action.payload
      };
    }
    case GET_SCHEDULE_SUCCESS: {
      return {
        ...state,
        calander: {
          ...state.calander,
          calander: action.payload
        }
      };
    }
    case SET_DATE: {
      return {
        ...state,
        calander: {
          ...state.calander,
          date: action.payload
        }
      };
    }
    case SET_SELECTED_DATE: {
      return {
        ...state,
        selected: action.payload
      };
    }
    case SET_DATE_MINI_CALANDER: {
      return {
        ...state,
        mini: {
          ...state.mini,
          date: action.payload
        }
      };
    }
    case GET_SCHEDULE_MINI_CALANDER_SUCCESS: {
      return {
        ...state,
        mini: {
          ...state.mini,
          calander: action.payload
        }
      };
    }
    case SET_TODAY_SCHEDULE: {
      return {
        ...state,
        todaySchedule: action.payload
      };
    }
    default: {
      return state;
    }
  }
};

export default scheduleReducer;
