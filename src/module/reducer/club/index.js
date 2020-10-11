import { UPDATE_CLUB_DETAIL, UPDATE_CLUB_LIST } from "../../action/club";

const initialState = {
  detail: {
    name: "",
    where: "",
    teacher: "",
    owner: "",
    people: {
      one: [],
      two: [],
      three: []
    }
  },
  list: []
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
    default:
      return state;
  }
};

export default clubReducer;
