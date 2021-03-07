import { DStatsAction } from "../../action/d_stats";

const initialState = {
  stats: {
    first: {},
    second: {},
    third: {}
  },
  clickedFloor: [
    { text: "4층", isClicked: true },
    { text: "3층" },
    { text: "2층" },
    { text: "기타" }
  ],
  clickedPriority: []
};

const dStatsReducer = (state = initialState, action) => {
  const { SET_STATS, SET_SCLICKED_FLOOR, SET_SCLICKED_PRIORITY } = DStatsAction;

  switch (action.type) {
    case SET_STATS: {
      const { grade, data } = action.payload;
      const grade_arr = ["first", "second", "third"];

      return {
        ...state,
        stats: {
          ...state.stats,
          [grade_arr[grade - 1]]: data
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
