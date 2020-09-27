import { GET_PRE_ABSENT, CREATE_PRIOR_ABSENT } from "../../action/prior_absent";

const initialState = {
  priorAbsent: []
};

const priorAbsentReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRE_ABSENT: {
      return {
        ...state,
        priorAbsent: action.payload
      };
    }
    case CREATE_PRIOR_ABSENT: {
      return { ...state };
    }
    default: {
      return state;
    }
  }
};

export default priorAbsentReducer;
