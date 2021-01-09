import { DAttendanceAction } from "../../action/d_attendance";

const initialState = {
  selectAttendanceArr: [],
  currentAttendanceIndexArr: [0, 0]
};

const DAttendanceReducer = (state = initialState, action) => {
  const {
    SET_SELECT_ATTENDANCE_ARR,
    SET_CURRENT_ATTENDANCE_INDEX_ARR
  } = DAttendanceAction;

  switch (action.type) {
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
    default: {
      return state;
    }
  }
};

export default DAttendanceReducer;
