import { SET_MAIN_TEXT_REMAINING_DATE } from "../../action/main_text";

const initialState = {
  remainingDate: []
};

const mainTextReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MAIN_TEXT_REMAINING_DATE: {
      let remainDateText = "";
      switch (action.payload) {
        case -1:
          remainDateText = "데이터가 없습니다.";
          return {
            ...state,
            remainingDate: ["다음 자습감독일", " 데이터가 없습니다."]
          };
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
        remainingDate: [remainDateText, " 저녁 자습감독이십니다."]
      };
    }
    default: {
      return state;
    }
  }
};

export default mainTextReducer;
