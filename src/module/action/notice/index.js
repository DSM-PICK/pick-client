export const SET_CLUB_NOTICE_LIST = "notice/SET_CLUB_NOTICE_LIST";
export const SET_MEMBER_NOTICE_LIST = "notice/SET_MEMBER_NOTICE_LIST";

export const GET_NOTICE_LIST_SAGA = "notice/GET_NOTICE_LIST_SAGA";

export const setClubNoticeList = payload => ({
  type: SET_CLUB_NOTICE_LIST,
  payload
});
export const setMemberNoticeList = payload => ({
  type: SET_MEMBER_NOTICE_LIST,
  payload
});

export const getNoticeListSaga = () => ({
  type: GET_NOTICE_LIST_SAGA
});
