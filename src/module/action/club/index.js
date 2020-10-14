export const UPDATE_CLUB_LIST = "club/UPDATE_CLUB_LIST";
export const UPDATE_CLUB_LIST_SAGA = "club/UPDATE_CLUB_LIST_SAGA";

export const UPDATE_CLUB_DETAIL = "club/UPDATE_CLUB_DETAIL";
export const UPDATE_CLUB_DETAIL_SAGA = "club/UPDATE_CLUB_DETAIL_SAGA";

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

export const updateClubDetailSaga = () => ({
  type: UPDATE_CLUB_DETAIL_SAGA
});
