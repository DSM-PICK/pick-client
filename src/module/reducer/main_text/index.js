import { SET_MAIN_TEXT_REMAINING_DATE } from "../../action/main_text";

const initialState = {
  remainingDate: ""
};

const mainTextReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MAIN_TEXT_REMAINING_DATE: {
      let remainDateText = "";
      switch (action.payload) {
        case 0:
          remainDateText = "오늘";
          break;
        case 1:
          remainDateText = "내일";
          break;
        case 2:
          remainDateText = "모레";
          break;
        default:
          remainDateText = `${action.payload}일 후`;
      }
      return {
        ...state,
        remainingDate: remainDateText
      };
    }
    default: {
      return state;
    }
  }
};

export default mainTextReducer;
