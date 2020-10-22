import {
  SET_MAIN_TEXT,
  SET_MAIN_TEXT_REMAINING_DATE,
  SET_SUB_TEXT
} from "../../action/main_text";

const initialState = {
  subText: [],
  mainText: "",
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
    case SET_SUB_TEXT: {
      let subText = [];
      switch (action.payload) {
        case "주말":
          subText = ["오늘은 ", "입니다!"];
          break;
        case "퇴근":
          subText = ["지금은 ", "시간입니다!"];
          break;
        default:
          subText = ["퇴근까지 ", " 남았습니다!"];
      }
      return {
        ...state,
        subText: subText
      };
    }
    case SET_MAIN_TEXT: {
      return {
        ...state,
        mainText: action.payload
      };
    }
    default: {
      return state;
    }
  }
};

export default mainTextReducer;
