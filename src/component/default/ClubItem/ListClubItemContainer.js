import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import ClubItem from "./ClubItem";
import modalAction from "../../../module/action/modal";
import { updateClubDetailSaga } from "../../../module/action/club";

const ListClubItemContainer = ({ where, name }) => {
  const dispatch = useDispatch();
  const clickHandler = useCallback(() => {
    dispatch(updateClubDetailSaga(name));
    dispatch(modalAction.creater.modalOn());
  }, []);
  return <ClubItem name={name} where={where} onClick={clickHandler} />;
};

export default ListClubItemContainer;
