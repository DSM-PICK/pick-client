import { DStatsAction } from "../../action/d_stats";

const initialState = {
  stats: {
    first: {},
    second: {},
    third: {}
  }
};

const dStatsReducer = (state = initialState, action) => {
  const { SET_STATS } = DStatsAction;

  switch (action.type) {
    case SET_STATS: {
      const grade_arr = ["first", "second", "third"];

      return {
        ...state,
        stats: {
          ...state.stats,
          [grade_arr[action.payload.grade - 1]]: action.payload.data
        }
      };
    }
    default: {
      return state;
    }
  }
};

export default dStatsReducer;
