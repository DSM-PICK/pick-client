import {
  SET_MAIN_TEXT_DATE,
  SET_MAIN_TEXT_REMAINING_DATE
} from "../../action/main_text";

const initialState = {
  date: "",
  remainingDate: ""
};

const mainTextReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MAIN_TEXT_DATE: {
      return {
        ...state,
        date: action.payload
      };
    }
    case SET_MAIN_TEXT_REMAINING_DATE: {
      return {
        ...state,
        remainingDate: action.payload
      };
    }
    default: {
      return state;
    }
  }
};

export default mainTextReducer;
