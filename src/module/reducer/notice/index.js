import {
  SET_CLUB_NOTICE_LIST,
  SET_MEMBER_NOTICE_LIST
} from "../../action/notice";

const initialState = {
  clubList: [],
  memberList: []
};

const noticeReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CLUB_NOTICE_LIST: {
      return {
        ...state,
        clubList: action.payload
      };
    }
    case SET_MEMBER_NOTICE_LIST: {
      return {
        ...state,
        memberList: action.payload
      };
    }
    default: {
      return {
        ...state
      };
    }
  }
};

export default noticeReducer;
