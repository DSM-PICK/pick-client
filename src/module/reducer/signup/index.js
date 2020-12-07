import {
  SET_AUTHENTICATE_ERROR,
  SET_IS_ACCOUNTED,
  SET_LOGIN_ERROR,
  SET_SIGN_UP_ERROR
} from "../../action/signup";

const initialState = {
  isAccounted: false,
  loginError: "",
  signupError: "",
  authenticateError: ""
};

const signupReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_IS_ACCOUNTED: {
      return {
        ...state,
        isAccounted: action.payload
      };
    }
    case SET_LOGIN_ERROR: {
      return {
        ...state,
        loginError: action.payload
      };
    }
    case SET_SIGN_UP_ERROR: {
      console.log(action);
      return {
        ...state,
        signupError: action.payload
      };
    }
    case SET_AUTHENTICATE_ERROR: {
      return {
        ...state,
        authenticateError: action.payload
      };
    }
    default: {
      return state;
    }
  }
};

export default signupReducer;
