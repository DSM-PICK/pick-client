import {
  SET_ATTENDANCE_CHANGE_STUDENT,
  SET_ATTENDANCE_CHANGE_TYPE,
  SET_DESCRIPTION,
  SET_SELECTED_DATE,
  DELETE_ATTENDANCE_CHANGE_STUDENT,
  SET_SELECTED_STUDENT
} from "../../../action/deskop/report";

const today = new Date();

const initialState = {
  attendanceChangeStudentList: [
    {
      type: "move",
      description: "엔트리로 이동",
      name: "오준상",
      number: "2212",
      id: 1
    }
  ],
  attendanceChangeList: [],
  selectedDate: {
    year: today.getFullYear(),
    month: today.getMonth() + 1,
    date: today.getDate()
  },
  selectedStudent: -1
};

const desktopReportReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ATTENDANCE_CHANGE_STUDENT: {
      return {
        ...state,
        attendanceChangeStudentList: action.payload
      };
    }
    case SET_ATTENDANCE_CHANGE_TYPE: {
      const newState = state.attendanceChangeStudentList.map(student => {
        if (student.id === action.payload.id) {
          return {
            ...student,
            type: action.payload.data
          };
        }
        return student;
      });
      return {
        ...state,
        attendanceChangeStudentList: newState
      };
    }
    case SET_DESCRIPTION: {
      const newState = state.attendanceChangeStudentList.map(student => {
        if (student.id === action.payload.id) {
          return {
            ...student,
            description: action.payload.data
          };
        }
        return student;
      });
      return {
        ...state,
        attendanceChangeStudentList: newState
      };
    }
    case SET_SELECTED_DATE: {
      return {
        ...state,
        selectedDate: action.payload
      };
    }
    case SET_SELECTED_STUDENT: {
      return {
        ...state,
        selectedStudent: action.payload
      };
    }
    case DELETE_ATTENDANCE_CHANGE_STUDENT: {
      const newState = state.attendanceChangeStudentList.filter(
        student => student.id !== action.payload
      );
      return {
        ...state,
        attendanceChangeStudentList: newState
      };
    }
    default: {
      return state;
    }
  }
};

export default desktopReportReducer;
