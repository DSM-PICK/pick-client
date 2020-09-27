const MODAL_ON = "admin_modal/MODAL_ON";
const MODAL_OFF = "admin_modal/MODAL_OFF";

const modalOn = () => ({
  type: MODAL_ON
});

const modalOff = () => ({
  type: MODAL_ON
});

const adminModal = {
  type: {
    MODAL_ON,
    MODAL_OFF
  },
  creator: {
    modalOn,
    modalOff
  }
};

export default adminModal;
