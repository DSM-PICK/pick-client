import { MODAL_ON, MODAL_OFF } from "../../action/admin_modal";

const initialState = {
  modalOn: false
};

const adminModalReducer = (state = initialState, action) => {
  switch (action.type) {
    case MODAL_ON: {
      return {
        modalOn: true
      };
    }
    case MODAL_OFF: {
      return {
        modalOn: false
      };
    }
    default: {
      return state;
    }
  }
};

export default adminModalReducer;
