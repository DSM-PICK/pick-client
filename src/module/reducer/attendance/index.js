import {
  GET_CLUB_FLOOR_DATA,
  GET_CLASS_FLOOR_DATA,
  GET_CLUB_DATA,
  GET_CLASS_DATA
} from "../../action/attendance";

const initialState = {
  floor: "",
  location: "",
  floorData: {},
  locationData: {}
};

const attendanceReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CLUB_FLOOR_DATA: {
      return {
        location: "CLUB",
        floor: action.payload
      };
    }
    case GET_CLASS_FLOOR_DATA: {
      return state;
    }
    case GET_CLUB_DATA: {
      return state;
    }
    case GET_CLASS_DATA: {
      return state;
    }
    default: {
      return state;
    }
  }
};

export default attendanceReducer;
