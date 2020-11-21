import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import ModalWrap from "../../component/ModalWrap/ModalWrap";
import { dropModal } from "../../module/action/modal_wrap";

const ModalWrapContainer = () => {
  const modalData = useSelector(state => state.modalWrap);

  const dispatch = useDispatch();
  const ModalOff = useCallback(() => dispatch(dropModal()), [dispatch]);

  return <ModalWrap modalData={modalData} ModalOff={ModalOff} />;
};

export default ModalWrapContainer;
