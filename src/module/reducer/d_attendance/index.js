import { DAttendanceAction } from "../../action/d_attendance";

const initialState = {
  classInfo: {
    name: "",
    head: "",
    managerTeacher: "",
    stdCount: 0,
    stdCountWithoutEmployment: 0
  },
  selectAttendanceArr: [],
  currentAttendanceIndexArr: [0, 0],
  attendanceData: []
};

const DAttendanceReducer = (state = initialState, action) => {
  const {
    SET_CLASS_INFO,
    SET_SELECT_ATTENDANCE_ARR,
    SET_CURRENT_ATTENDANCE_INDEX_ARR,
    SET_ATTENDANCE_STD_DATA
  } = DAttendanceAction;

  switch (action.type) {
    case SET_CLASS_INFO: {
      const {
        managerTeacher,
        name,
        head,
        stdCount,
        stdCountWithoutEmployment
      } = action.payload;
      return {
        ...state,
        classInfo: {
          managerTeacher: managerTeacher,
          name: name,
          head: head,
          stdCount: stdCount,
          stdCountWithoutEmployment: stdCountWithoutEmployment
        }
      };
    }
    case SET_SELECT_ATTENDANCE_ARR: {
      return {
        ...state,
        selectAttendanceArr: action.payload
      };
    }
    case SET_CURRENT_ATTENDANCE_INDEX_ARR: {
      return {
        ...state,
        currentAttendanceIndexArr: action.payload
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

export default DAttendanceReducer;
