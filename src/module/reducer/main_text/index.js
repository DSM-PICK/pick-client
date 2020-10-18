import {
  SET_MAIN_TEXT_DATE,
  SET_MAIN_TEXT_REMAINING_DATE
} from "../../action/main_text";

const initialState = {
  mainText: {
    date: "",
    remainingDate: ""
  }
};

const mainTextReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MAIN_TEXT_DATE: {
      return {
        mainText: {
          ...state,
          date: action.payload
        }
      };
    }
    case SET_MAIN_TEXT_REMAINING_DATE: {
      return {
        mainText: {
          ...state,
          remainingDate: action.payload
        }
      };
    }
    default: {
      return state;
    }
  }
};

export default mainTextReducer;
