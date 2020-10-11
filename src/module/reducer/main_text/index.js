import {
  SET_MAIN_TEXT_NAME,
  SET_MAIN_TEXT_DATE,
  SET_MAIN_TEXT_REMAIN_TIME
} from "../../action/main_text";

const initialState = {
  mainText: {
    name: "",
    date: "",
    remainTime: ""
  }
};

const mainTextReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MAIN_TEXT_NAME: {
      return {
        mainText: {
          name: action.payload,
          ...date,
          ...remainTime
        }
      };
    }
    case SET_MAIN_TEXT_DATE: {
      return {
        mainText: {
          ...name,
          date: action.payload,
          ...remainTime
        }
      };
    }
    case SET_MAIN_TEXT_REMAIN_TIME: {
      return {
        mainText: {
          ...name,
          ...date,
          remainTime: action.payload
        }
      };
    }
    default: {
      return state;
    }
  }
};

export default mainTextReducer;
