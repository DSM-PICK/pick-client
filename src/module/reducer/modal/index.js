import modalAction from "../../action/modal";

const initialState = {
  isOpen: false,
};

const modalReudcer = (state = initialState, action) => {
  switch (action.type) {
    case modalAction.type.MODAL_ON: {
      return {
        isOpen: true,
      };
    }
    case modalAction.type.MODAL_OFF: {
      return {
        isOpen: false,
      };
    }
    default: {
      return state;
    }
  }
};

export default modalReudcer;
