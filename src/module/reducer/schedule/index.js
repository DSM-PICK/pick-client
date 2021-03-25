import {
  GET_SCHEDULE_MINI_CALANDER_SUCCESS,
  GET_SCHEDULE_SUCCESS,
  SET_DATE,
  SET_DATE_MINI_CALANDER,
  SET_SELECTED_DATE
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
  }
};

const scheduleReducer = (state = initialState, action) => {
  switch (action.type) {
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
    default: {
      return state;
    }
  }
};

export default scheduleReducer;
