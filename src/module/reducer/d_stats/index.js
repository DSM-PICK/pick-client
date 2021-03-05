import { DStatsAction } from "../../action/d_stats";

const initialState = {
  stats: {}
};

const dStatsReducer = (state = initialState, action) => {
  const { SET_STATS } = DStatsAction;

  switch (action.type) {
    case SET_STATS: {
      return { ...state, stats: action.payload };
    }
    default: {
      return state;
    }
  }
};

export default dStatsReducer;
