import { DAttendanceAction } from "../../action/d_attendance";

const initialState = {
  currentAttendanceIndexArr: []
};

const DAttendanceReducer = (state = initialState, action) => {
  const { SET_CURRENT_ATTENDANCE_INDEX_ARR } = DAttendanceAction;

  switch (action.type) {
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
