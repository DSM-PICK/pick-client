import { GET_SCHEDULE_SUCCESS } from "../../action/schedule";

const initialState = [];

const scheduleReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SCHEDULE_SUCCESS: {
      return action.payload;
    }
    default: {
      return state;
    }
  }
};

export default scheduleReducer;
