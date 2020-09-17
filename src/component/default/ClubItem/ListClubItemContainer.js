import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import ClubItem from "./ClubItem";
import modalAction from "../../../module/action/modal";

const ListClubItemContainer = ({ id, where, name }) => {
  const dispatch = useDispatch();
  const clickHandler = useCallback(() => {
    dispatch(modalAction.creater.modalOn());
  }, []);
  return <ClubItem name={name} where={where} id={id} onClick={clickHandler} />;
};

export default ListClubItemContainer;
