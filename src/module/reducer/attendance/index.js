import {
  SET_SELF_STUDY_DATA,
  SET_SECOND_FLOOR_DATA,
  SET_THIRD_FLOOR_DATA,
  SET_FORTH_FLOOR_DATA,
  SET_SELF_STUDY_TEACHER_NAME,
  SET_SECOND_TEACHER_NAME,
  SET_THIRD_TEACHER_NAME,
  SET_FORTH_TEACHER_NAME,
  SET_ATTENDANCE_STD_DATA,
  SET_DATE,
  SET_DAY_OF_WEEK,
  SET_HEAD,
  SET_CLUB_NAME,
  SET_SCHEDULE
} from "../../action/attendance";

const initialState = {
  datas: {
    selfStudyData: [],
    secondFloorData: [],
    thirdFloorData: [],
    forthFloorData: []
  },

  teachers: {
    selfStudyTeacherName: "",
    secondTeacherName: "",
    thirdTeacherName: "",
    forthTeacherName: ""
  },

  date: "",
  dayOfWeek: "",

  schedule: "",
  clubName: "",
  clubHead: "",

  attendanceData: {}
};

const attendanceReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SELF_STUDY_DATA: {
      return {
        ...state,
        datas: {
          ...state.datas,
          selfStudyData: action.payload
        }
      };
    }
    case SET_SECOND_FLOOR_DATA: {
      return {
        ...state,
        datas: {
          ...state.datas,
          secondFloorData: action.payload
        }
      };
    }
    case SET_THIRD_FLOOR_DATA: {
      return {
        ...state,
        datas: {
          ...state.datas,
          thirdFloorData: action.payload
        }
      };
    }
    case SET_FORTH_FLOOR_DATA: {
      return {
        ...state,
        datas: {
          ...state.datas,
          forthFloorData: action.payload
        }
      };
    }
    case SET_SELF_STUDY_TEACHER_NAME: {
      return {
        ...state,
        teachers: {
          ...state.teachers,
          selfStudyTeacherName: action.payload
        }
      };
    }
    case SET_SECOND_TEACHER_NAME: {
      return {
        ...state,
        teachers: {
          ...state.teachers,
          secondTeacherName: action.payload
        }
      };
    }
    case SET_THIRD_TEACHER_NAME: {
      return {
        ...state,
        teachers: {
          ...state.teachers,
          thirdTeacherName: action.payload
        }
      };
    }
    case SET_FORTH_TEACHER_NAME: {
      return {
        ...state,
        teachers: {
          ...state.teachers,
          forthTeacherName: action.payload
        }
      };
    }
    case SET_DATE: {
      return {
        ...state,
        date: action.payload
      };
    }
    case SET_DAY_OF_WEEK: {
      return {
        ...state,
        dayOfWeek: action.payload
      };
    }
    case SET_SCHEDULE: {
      return {
        ...state,
        schedule: action.payload
      };
    }
    case SET_CLUB_NAME: {
      return {
        ...state,
        clubName: action.payload
      };
    }
    case SET_HEAD: {
      return {
        ...state,
        clubHead: action.payload
      };
    }
    case SET_ATTENDANCE_STD_DATA: {
      return {
        ...state,
        attendanceData: action.payload
      };
    }
    default: {
      return state;
    }
  }
};

export default attendanceReducer;
