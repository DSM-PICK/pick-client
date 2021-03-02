import { GET_SCHEDULE_SUCCESS, SET_DATE } from "../../action/schedule";

const initialState = {
  calander: [],
  date: {
    year: 0,
    month: 0
  }
};

const scheduleReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SCHEDULE_SUCCESS: {
      return {
        ...state,
        calander: action.payload
      };
    }
    case SET_DATE: {
      return {
        ...state,
        date: action.payload
      };
    }
    default: {
      return state;
    }
  }
};

export default scheduleReducer;
