import { DROP_MODAL, SHOW_MODAL } from "../../action/modal_wrap";

const initialState = {
  isShow: false,
  modalElement: null
};

const modalReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_MODAL: {
      return {
        ...state,
        isShow: true,
        modalElement: action.payload
      };
    }
    case DROP_MODAL: {
      return {
        ...state,
        isShow: false,
        modalElement: null
      };
    }
    default: {
      return state;
    }
  }
};

export default modalReducer;
