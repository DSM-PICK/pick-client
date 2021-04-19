import { GET_SEARCH_SUCCESS } from "../../action/search";

const initialState = [];

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SEARCH_SUCCESS: {
      return action.payload;
    }
    default: {
      return state;
    }
  }
};

export default searchReducer;
