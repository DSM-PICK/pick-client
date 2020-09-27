import {
  SET_TEXT,
  SET_AUTO_COMPLETE_TEXT,
  ERR_AUTO_COMPLETE_TEXT
} from "../../action/auto_complete";

const initialState = {
  text: "",
  autoComplete: []
};

const autoComplete = (state = initialState, action) => {
  switch (action.type) {
    case SET_TEXT: {
      return {
        ...state,
        text: action.payload
      };
    }
    case SET_AUTO_COMPLETE_TEXT: {
      return {
        ...state,
        autoComplete: action.payload
      };
    }
    case ERR_AUTO_COMPLETE_TEXT: {
      return {
        ...state,
        autoComplete: []
      };
    }
    default: {
      return state;
    }
  }
};

export default autoComplete;
