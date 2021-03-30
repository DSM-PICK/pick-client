import { DStatsAction } from "../../action/d_stats";

const initialState = {
  stats: {
    first: {},
    second: {},
    third: {}
  },
  clickedFloor: [
    { text: "2층", isClicked: true },
    { text: "3층" },
    { text: "4층" },
    { text: "기타" }
  ],
  clickedPriority: [],
  clickedPriorityArrPriority: 0,
  statsAttendance: [],
  activityByDate: {},

  managedInfo: {
    club: {
      isUngranted: true,
      data: [],
      floorData: []
    },
    class: {
      isUngranted: true,
      data: {},
      floorData: []
    }
  },
  firstScheduleAttendanceArr: { class: [], club: [] },
  managedClassFloorData: [],
  managedClubFloorData: []
};

const dStatsReducer = (state = initialState, action) => {
  const {
    SET_STATS,
    SET_SCLICKED_FLOOR,
    SET_SCLICKED_PRIORITY,
    SET_SCLICKED_PRIORITY_ARR_PRIORITY,
    SET_SATTENDANCE_DATA,
    SET_ACTIVITY_BY_DATE,
    SET_MANAGED_CLASS_FLOOR_DATA,
    SET_MANAGED_CLUB_FLOOR_DATA,
    SET_MANAGED_INFO
  } = DStatsAction;

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
    case SET_SCLICKED_PRIORITY_ARR_PRIORITY: {
      return {
        ...state,
        clickedPriorityArrPriority: action.payload.clickedPriorityArrPriority
      };
    }
    case SET_SATTENDANCE_DATA: {
      return {
        ...state,
        statsAttendance: action.payload.statsAttendance
      };
    }
    case SET_ACTIVITY_BY_DATE: {
      return {
        ...state,
        activityByDate: action.payload
      };
    }
    case SET_MANAGED_INFO: {
      return {
        ...state,
        managedInfo: action.payload
      };
    }
    case SET_MANAGED_CLASS_FLOOR_DATA: {
      return {
        ...state,
        managedClassFloorData: action.payload
      };
    }
    case SET_MANAGED_CLUB_FLOOR_DATA: {
      return {
        ...state,
        managedClubFloorData: action.payload
      };
    }
    default: {
      return state;
    }
  }
};

export default dStatsReducer;
