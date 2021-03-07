import { ToggleAction } from "../../action/toggle";

const initialState = {
  selectSchedule: "교실자습"
};

const toggleReducer = (state = initialState, action) => {
  const { SET_SELECT_SCHEDULE } = ToggleAction;

  switch (action.type) {
    case SET_SELECT_SCHEDULE: {
      return {
        ...state,
        selectSchedule: action.payload
      };
    }
    default: {
      return state;
    }
  }
};

export default toggleReducer;
