import {
  SET_FIRST_FLOOR_DATA,
  SET_SECOND_FLOOR_DATA,
  SET_THIRD_FLOOR_DATA,
  SET_FORTH_FLOOR_DATA,
  SET_FIRST_TEACHER_NAME,
  SET_SECOND_TEACHER_NAME,
  SET_THIRD_TEACHER_NAME,
  SET_FORTH_TEACHER_NAME,
  SET_ATTENDANCE_STD_DATA,
  SET_DATE,
  SET_DAY_OF_WEEK,
  SET_HEAD,
  SET_CLUB_NAME,
  SET_SCHEDULE,
  SET_CURRENT_CLASS_INFO,
  SET_IS_LOADING,
  SET_CHECK_ARR,
  SET_CHECK_ALL,
  SET_CHECK_ARR_WITH_DISABLE,
  SET_TODAY_SCHEDULE
} from "../../action/attendance";

const initialState = {
  datas: {
    firstFloorData: [],
    secondFloorData: [],
    thirdFloorData: [],
    forthFloorData: []
  },

  teachers: {
    firstTeacherName: "",
    secondTeacherName: "",
    thirdTeacherName: "",
    forthTeacherName: ""
  },

  currentClassInfo: {
    floor: "",
    priority: ""
  },

  date: "",
  dayOfWeek: "",

  schedule: "",
  clubName: "",
  clubHead: "",

  isLoading: false,
  attendanceData: {},

  checkArrWithDisable: [],
  checkArr: [],
  chekAll: false,

  todaySchedule: ""
};

const attendanceReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FIRST_FLOOR_DATA: {
      return {
        ...state,
        datas: {
          ...state.datas,
          firstFloorData: action.payload
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
    case SET_FIRST_TEACHER_NAME: {
      return {
        ...state,
        teachers: {
          ...state.teachers,
          firstTeacherName: action.payload
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
    case SET_CURRENT_CLASS_INFO: {
      return {
        ...state,
        currentClassInfo: action.payload
      };
    }
    case SET_IS_LOADING: {
      return {
        ...state,
        isLoading: action.payload
      };
    }
    case SET_CHECK_ARR: {
      return {
        ...state,
        checkArr: action.payload
      };
    }
    case SET_CHECK_ALL: {
      return {
        ...state,
        checkAll: action.payload
      };
    }
    case SET_CHECK_ARR_WITH_DISABLE: {
      return {
        ...state,
        checkArrWithDisable: action.payload
      };
    }
    case SET_TODAY_SCHEDULE: {
      return {
        ...state,
        todaySchedule: action.payload
      };
    }
    default: {
      return state;
    }
  }
};

export default attendanceReducer;
