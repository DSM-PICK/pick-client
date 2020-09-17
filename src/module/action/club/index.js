export const UPDATE_CLUB_LIST = "club/UPDATE_CLUB_LIST";
export const UPDATE_CLUB_DETAIL = "club/UPDATE_CLUB_DETAIL";

export const updateClubList = (payload) => ({
  type: UPDATE_CLUB_LIST,
  payload,
});

export const updateClubDetail = (payload) => ({
  type: UPDATE_CLUB_DETAIL,
  payload,
});
