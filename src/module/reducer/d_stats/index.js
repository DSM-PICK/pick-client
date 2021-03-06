import { DStatsAction } from "../../action/d_stats";

const initialState = {
  stats: {
    first: {},
    second: {},
    third: {}
  },
  clickedFloor: "",
  clickedPriority: ""
};

const dStatsReducer = (state = initialState, action) => {
  const { SET_STATS, SET_SCLICKED_FLOOR, SET_SCLICKED_PRIORITY } = DStatsAction;

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
    case SET_SCLICKED_FLOOR: {
      return {
        ...state,
        clickedFloor: action.payload.clickedFloor
      };
    }
    case SET_SCLICKED_PRIORITY: {
      return {
        ...state,
        clickedPriority: action.payload.clickedPriority
      };
    }
    default: {
      return state;
    }
  }
};

export default dStatsReducer;
