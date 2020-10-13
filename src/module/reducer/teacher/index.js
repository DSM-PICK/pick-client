import { teacherAction } from "../../action/teacher";

const initialState = {
  today: {
    floor2: "",
    floor3: "",
    floor4: ""
  },
  week: []
};

const teacherReducer = (state = initialState, action) => {
  const { GET_TEACHER_TODAY, GET_TEACHER_WEEK } = teacherAction;

  switch (action.type) {
    case GET_TEACHER_TODAY: {
      return {
        ...state,
        today: action.payload
      };
    }
    case GET_TEACHER_WEEK: {
      return {
        ...state,
        week: action.payload
      };
    }
    default: {
      return state;
    }
  }
};

export default teacherReducer;
