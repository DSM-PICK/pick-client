import {
  GET_CLUB_LOCATION,
  GET_STUDENT,
  UPDATE_CLUB_DETAIL,
  UPDATE_CLUB_LIST
} from "../../action/club";

const initialState = {
  detail: {
    club: {
      name: "",
      location: "",
      teacher: "",
      club_head: "",
      floor: "",
      priority: 0
    },
    students: []
  },
  list: [],
  location: [],
  students: []
};

const clubReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_CLUB_LIST:
      return {
        ...state,
        list: action.payload
      };
    case UPDATE_CLUB_DETAIL:
      return {
        ...state,
        detail: action.payload
      };
    case GET_CLUB_LOCATION:
      return {
        ...state,
        location: action.payload
      };
    case GET_STUDENT:
      return {
        ...state,
        students: action.payload
      };
    default:
      return state;
  }
};

export default clubReducer;
