import {
  SET_ATTENDANCE_CHANGE_STUDENT,
  SET_ATTENDANCE_CHANGE_TYPE,
  SET_DESCRIPTION,
  DELETE_ATTENDANCE_CHANGE_STUDENT,
  SET_SELECTED_STUDENT,
  SET_END_DATE,
  SET_START_DATE,
  SET_END_PERIOD,
  SET_START_PERIOD,
  SET_ATTENDANCE_CHANGE_LIST,
  SIMILER_STUDENT,
  SET_NEW_ATTENDANCE_CHANGE_STUDENT,
  SET_FIX_ATTENDANCE_CHANGE_STUDENT_STUDENT
} from "../../../action/deskop/report";

const today = new Date();

const initialState = {
  attendanceChangeStudentList: [],
  attendanceChangeList: [],
  selectedStudent: -1,
  similerStudents: []
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
    case SET_END_DATE: {
      const newState = state.attendanceChangeStudentList.map(student => {
        if (student.id === action.payload.id) {
          return {
            ...student,
            endDate: action.payload.date
          };
        }
        return student;
      });
      return {
        ...state,
        attendanceChangeStudentList: newState
      };
    }
    case SET_START_DATE: {
      const newState = state.attendanceChangeStudentList.map(student => {
        if (student.id === action.payload.id) {
          return {
            ...student,
            startDate: action.payload.date
          };
        }
        return student;
      });
      return {
        ...state,
        attendanceChangeStudentList: newState
      };
    }
    case SET_END_PERIOD: {
      const newState = state.attendanceChangeStudentList.map(student => {
        if (student.id === action.payload.id) {
          return {
            ...student,
            endPeriod: action.payload.period
          };
        }
        return student;
      });
      return {
        ...state,
        attendanceChangeStudentList: newState
      };
    }
    case SET_START_PERIOD: {
      const newState = state.attendanceChangeStudentList.map(student => {
        if (student.id === action.payload.id) {
          return {
            ...student,
            startPeriod: action.payload.period
          };
        }
        return student;
      });
      return {
        ...state,
        attendanceChangeStudentList: newState
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
    case SET_ATTENDANCE_CHANGE_LIST: {
      return {
        ...state,
        attendanceChangeList: action.payload
      };
    }
    case SIMILER_STUDENT: {
      return {
        ...state,
        similerStudents: action.payload
      };
    }
    case SET_NEW_ATTENDANCE_CHANGE_STUDENT: {
      const nowYear = new Date().getFullYear();
      const nowMonth = new Date().getMonth() + 1;
      const nowDate = new Date().getDate();
      const id = Math.random();
      return {
        ...state,
        selectedStudent: id,
        attendanceChangeStudentList: [
          ...state.attendanceChangeStudentList,
          {
            type: "move",
            description: "",
            name: action.payload.name,
            number: action.payload.number,
            id,
            endDate: {
              year: nowYear,
              month: nowMonth,
              date: nowDate
            },
            startDate: {
              year: nowYear,
              month: nowMonth,
              date: nowDate
            },
            endPeriod: "",
            startPeriod: "",
            isFix: false
          }
        ]
      };
    }
    case SET_FIX_ATTENDANCE_CHANGE_STUDENT_STUDENT: {
      return {
        ...state,
        attendanceChangeStudentList: [
          ...state.attendanceChangeStudentList,
          { ...action.payload, isFix: true }
        ]
      };
    }
    default: {
      return state;
    }
  }
};

export default desktopReportReducer;
