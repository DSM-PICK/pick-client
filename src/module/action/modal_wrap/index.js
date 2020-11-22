export const SHOW_MODAL = "modal/SHOW_MODAL";
export const DROP_MODAL = "modal/DROP_MODAL";

export const showModal = payload => ({
  type: SHOW_MODAL,
  payload
});
export const dropModal = () => ({
  type: DROP_MODAL
});
