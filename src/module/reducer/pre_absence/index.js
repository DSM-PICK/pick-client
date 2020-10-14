import {
  SET_PRE_ABSENCE,
  SET_PRE_ABSENCE_STATE,
  SET_PRE_ABSENCE_STD_NAME,
  SET_PRE_ABSENCE_PRE_DATE,
  SET_PRE_ABSENCE_NEXT_DATE,
  SET_PRE_ABSENCE_PRE_PERIOD,
  SET_PRE_ABSENCE_NEXT_PERIOD
} from "../../action/pre_absence";

const initialState = {
  preAbsenceList: [],
  preAbsence: {
    preAbsenceState: "외출",
    preAbsenceStdName: "",
    preAbsencePreDate: "",
    preAbsencePrePeriod: "",
    preAbsenceNextDate: "",
    preAbsenceNextPeriod: ""
  }
};

const preAbsenceReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PRE_ABSENCE: {
      return {
        ...state,
        preAbsence: {
          ...state.preAbsence,
          preAbsenceList: action.payload
        }
      };
    }
    case SET_PRE_ABSENCE_STATE: {
      return {
        ...state,
        preAbsence: {
          ...state.preAbsence,
          preAbsenceState: action.payload
        }
      };
    }
    case SET_PRE_ABSENCE_STD_NAME: {
      return {
        ...state,
        preAbsence: {
          ...state.preAbsence,
          preAbsenceStdName: action.payload
        }
      };
    }
    case SET_PRE_ABSENCE_PRE_DATE: {
      return {
        ...state,
        preAbsence: {
          ...state.preAbsence,
          preAbsencePreDate: action.payload
        }
      };
    }
    case SET_PRE_ABSENCE_NEXT_DATE: {
      return {
        ...state,
        preAbsence: {
          ...state.preAbsence,
          preAbsenceNextDate: action.payload
        }
      };
    }
    case SET_PRE_ABSENCE_PRE_PERIOD: {
      return {
        ...state,
        preAbsence: {
          ...state.preAbsence,
          preAbsencePrePeriod: action.payload
        }
      };
    }
    case SET_PRE_ABSENCE_NEXT_PERIOD: {
      return {
        ...state,
        preAbsence: {
          ...state.preAbsence,
          preAbsenceNextPeriod: action.payload
        }
      };
    }
    default: {
      return state;
    }
  }
};

export default preAbsenceReducer;
