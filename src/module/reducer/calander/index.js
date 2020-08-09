import { SHOW_MY_SCHEDULE, DEFAULT_STATUS } from "../../action/calander";

const defaultState = {
  state: "DEFAULT",
  focusTeacher: "",
};

const calanderReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SHOW_MY_SCHEDULE: {
      return {
        ...state,
        state: "SHOW_MY_SCHEDULE",
        focusTeacher: action.payload,
      };
    }
    case DEFAULT_STATUS: {
      return {
        ...state,
        state: "DEFAULT",
      };
    }
    default: {
      return state;
    }
  }
};

export default calanderReducer;
