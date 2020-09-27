export const GET_PRE_ABSENT = "prior_absent/GET_PRE_ABSENT";
export const CREATE_PRIOR_ABSENT = "prior_absent/CREATE_PRIOR_ABSENT";

export const SET_PRE_ABSENT_SAGA = "prior_absent/SET_PRE_ABSENT_SAGA";

export const getPreAbsent = payload => ({
  type: GET_PRE_ABSENT,
  payload
});

export const createPriorAbsent = payload => ({
  type: CREATE_PRIOR_ABSENT,
  payload
});

export const setPreAbentSaga = payload => ({
  type: SET_PRE_ABSENT_SAGA,
  payload
});
