export const GET_SEARCH = "search/GET_SEARCH";
export const GET_SEARCH_SUCCESS = "search/GET_SEARCH_SUCCESS";

export const getSearch = name => ({
  type: GET_SEARCH,
  payload: name
});

export const getSearchSuccess = students => ({
  type: GET_SEARCH_SUCCESS,
  payload: students
});
