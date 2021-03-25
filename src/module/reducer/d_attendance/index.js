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
  attendanceData: [],
  selectArr: [],
  selectAll: false,
  managedInfo: {
    club: {
      isUngranted: true,
      data: [],
      floorData: []
    },
    class: {
      isUngranted: true,
      data: {},
      floorData: []
    }
  },
  firstScheduleAttendanceArr: { class: [], club: [] },
  managedClassFloorData: [],
  managedClubFloorData: [],
  isFastClick: false,
  currentClassPriority: 0,
  memoFloorData: []
};

const DAttendanceReducer = (state = initialState, action) => {
  const {
    SET_CLASS_INFO,
    SET_SELECT_ATTENDANCE_ARR,
    SET_CURRENT_ATTENDANCE_INDEX_ARR,
    SET_ATTENDANCE_STD_DATA,
    SET_SELECT_ARR,
    SET_SELECT_ALL,
    SET_MANAGED_INFO,
    SET_MANAGED_CLASS_FLOOR_DATA,
    SET_MANAGED_CLUB_FLOOR_DATA,
    SET_IS_FAST_CLICK,
    SET_FIRST_SCHEDULE_ATTENDANCE_ARR,
    SET_CURRENT_CLASS_PRIORITY,
    SET_MEMO_FLOOR_DATA
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
    case SET_SELECT_ARR: {
      return {
        ...state,
        selectArr: action.payload
      };
    }
    case SET_SELECT_ALL: {
      return {
        ...state,
        selectAll: action.payload
      };
    }
    case SET_MANAGED_INFO: {
      return {
        ...state,
        managedInfo: action.payload
      };
    }
    case SET_MANAGED_CLASS_FLOOR_DATA: {
      return {
        ...state,
        managedClassFloorData: action.payload
      };
    }
    case SET_MANAGED_CLUB_FLOOR_DATA: {
      return {
        ...state,
        managedClubFloorData: action.payload
      };
    }
    case SET_IS_FAST_CLICK: {
      return {
        ...state,
        isFastClick: action.payload
      };
    }
    case SET_FIRST_SCHEDULE_ATTENDANCE_ARR: {
      return {
        ...state,
        firstScheduleAttendanceArr: action.payload
      };
    }
    case SET_CURRENT_CLASS_PRIORITY: {
      return {
        ...state,
        currentClassPriority: action.payload
      };
    }
    case SET_MEMO_FLOOR_DATA: {
      return {
        ...state,
        memoFloorData: action.payload
      };
    }
    default: {
      return state;
    }
  }
};

export default DAttendanceReducer;
