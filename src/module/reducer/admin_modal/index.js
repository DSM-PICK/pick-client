import adminModal from "../../action/admin_modal";

const initialState = {
  modalOn: false
};

const adminModalReducer = (state = initialState, action) => {
  switch (action.type) {
    case adminModal.type.MODAL_ON: {
      return {
        modalOn: true
      };
    }
    case adminModal.type.MODAL_OFF: {
      return {
        modalOff: false
      };
    }
    default: {
      return state;
    }
  }
};

export default adminModalReducer;
