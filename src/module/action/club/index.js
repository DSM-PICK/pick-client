export const UPDATE_CLUB_LIST = "club/UPDATE_CLUB_LIST";
export const UPDATE_CLUB_LIST_SAGA = "club/UPDATE_CLUB_LIST_SAGA";

export const UPDATE_CLUB_DETAIL = "club/UPDATE_CLUB_DETAIL";
export const UPDATE_CLUB_DETAIL_SAGA = "club/UPDATE_CLUB_DETAIL_SAGA";

export const CHANGE_CLUB_DATA_SAGA = "club/CHANGE_CLUB_DATA_SAGA";

export const ADD_CLUB_SAGA = "club/ADD_CLUB_SAGAA";

export const DELETE_CLUB_SAGA = "club/DELETE_CLUB_SAGA";

export const updateClubList = payload => ({
  type: UPDATE_CLUB_LIST,
  payload
});

export const updateClubListSaga = () => ({
  type: UPDATE_CLUB_LIST_SAGA
});

export const updateClubDetail = payload => ({
  type: UPDATE_CLUB_DETAIL,
  payload
});

export const updateClubDetailSaga = payload => ({
  type: UPDATE_CLUB_DETAIL_SAGA,
  payload
});

export const changeClubDataSaga = payload => ({
  type: CHANGE_CLUB_DATA_SAGA,
  payload
});

export const addClubSaga = payload => ({
  type: ADD_CLUB_SAGA,
  payload
});

export const deleteClubSaga = payload => ({
  type: DELETE_CLUB_SAGA,
  payload
});
