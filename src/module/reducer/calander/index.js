import {
  SHOW_MY_SCHEDULE_STATUS,
  DEFAULT_STATUS,
  CHANGE_MY_SCHEDULE_STATUS,
  SELECT_FIRST_DAY,
  SELECT_SECOND_DAY,
  SELECT_SECOND_DAY_TEACHER,
  GET_SCHEDULE
} from "../../action/calander";

const defaultState = {
  state: DEFAULT_STATUS,
  todayTeacher: window.localStorage.getItem("teacherName"),
  calanderArr: [],
  changeScheduleStatus: 1,
  changeDays: {
    first: {},
    second: {}
  }
};

const calanderReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SHOW_MY_SCHEDULE_STATUS: {
      return {
        ...state,
        state: SHOW_MY_SCHEDULE_STATUS
      };
    }
    case DEFAULT_STATUS: {
      return {
        ...state,
        state: DEFAULT_STATUS
      };
    }
    case CHANGE_MY_SCHEDULE_STATUS: {
      return {
        ...state,
        state: CHANGE_MY_SCHEDULE_STATUS,
        changeScheduleStatus: action.payload,
        changeDays: {}
      };
    }
    case SELECT_FIRST_DAY: {
      return {
        ...state,
        changeScheduleStatus: 2,
        changeDays: {
          first: action.payload
        }
      };
    }
    case SELECT_SECOND_DAY: {
      return {
        ...state,
        changeScheduleStatus: 3,
        changeDays: {
          ...state.changeDays,
          second: action.payload
        }
      };
    }
    case SELECT_SECOND_DAY_TEACHER: {
      const { floor, name } = action.payload;
      return {
        ...state,
        changeScheduleStatus: 4,
        changeDays: {
          ...state.changeDays,
          second: {
            ...state.changeDays.second,
            floor,
            name
          }
        }
      };
    }
    case GET_SCHEDULE: {
      return {
        ...state,
        calanderArr: action.payload
      };
    }
    default: {
      return state;
    }
  }
};

export default calanderReducer;
