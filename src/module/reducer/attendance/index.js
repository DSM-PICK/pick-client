import {
  SET_CLUB_FIRST_DATA,
  SET_CLUB_SECOND_DATA,
  SET_CLUB_THIRD_DATA,
  SET_CLUB_FORTH_DATA,
  SET_SELF_STUDY_SECOND_DATA,
  SET_SELF_STUDY_THIRD_DATA,
  SET_SELF_STUDY_FORTH_DATA,, SET_FLOOR, SET_ATTENDANCE_DATA, SET_PERIOD, SET_STATE, SET_NUMBER
} from "../../action/attendance";

const initialState = {
  clubFirstData = [],
  clubSecondData = [],
  clubThirdData = [],
  clubForthData = [],
  selfStudySecondData = [],
  selfStudyThirdData = [],
  selfStudyForthData = [],

  activity: "",
  floor: "",
  priority: "",

  number: "",
  period: "",
  state: "",

  attendanceData = {},
};

const attendanceReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CLUB_FIRST_DATA: {
      return {
        ...state,
        clubFirstData: action.payload,
      }
    }
    case SET_CLUB_SECOND_DATA: {
      return {
        ...state,
        clubSecondData: action.payload,
      }
    }
    case SET_CLUB_THIRD_DATA: {
      return {
        ...state,
        clubThirdData: action.payload,
      }
    }
    case SET_CLUB_FORTH_DATA: {
      return {
        ...state,
        clubForthData: action.payload,
      }
    }
    case SET_SELF_STUDY_SECOND_DATA: {
      return {
        ...state,
        selfStudySecondData: action.payload,
      }
    }
    case SET_SELF_STUDY_THIRD_DATA: {
      return {
        ...state,
        selfStudyThirdData: action.payload,
      }
    }
    case SET_SELF_STUDY_FORTH_DATA: {
      return {
        ...state,
        selfStudyForthData: action.payload,
      }
    }
    case SET_ACTIVITY: {
      return {
        ...state,
        activity: action.payload
      }
    }
    case SET_FLOOR: {
      return {
        ...state,
        floor: action.payload,
      }
    }
    case SET_PRIORITY: {
      return {
        ...state,
        priority: action.payload,
      }
    }
    case SET_NUMBER: {
      return {
        ...state,
        number: action.payload,
      }
    }
    case SET_PERIOD: {
      return {
        ...state,
        period: action.payload,
      }
    }
    case SET_STATE: {
      return {
        ...state,
        state: action.payload,
      }
    }
    case SET_ATTENDANCE_DATA: {
      return {
        ...state,
        attendanceData: action.payload
      }
    }
    default: {
      return state;
    }
  }
};

export default attendanceReducer;
