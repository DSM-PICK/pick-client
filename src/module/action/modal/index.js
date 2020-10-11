const MODAL_ON = "modal/MODAL_ON";
const MODAL_OFF = "modal/MODAL_OFF";

const modalOn = () => ({
  type: MODAL_ON,
});

const modalOff = () => ({
  type: MODAL_OFF,
});

const modalAction = {
  type: {
    MODAL_ON,
    MODAL_OFF,
  },
  creater: {
    modalOn,
    modalOff,
  },
};

export default modalAction;
