import React, { useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";
import { updateClubDetailSaga } from "../../../module/action/club";
import modalAction from "../../../module/action/modal";
import ClubItem from "./ClubItem";

const ManagementClubItemContainer = ({
  name,
  where,
  isDeleteOn,
  changeSelectItem
}) => {
  const dispatch = useDispatch();
  const clickHandler = useCallback(
    e => {
      if (isDeleteOn) {
        changeSelectItem(name);
        e.target.classList.toggle("active");
        return;
      }
      dispatch(updateClubDetailSaga(name));
      dispatch(modalAction.creater.modalOn());
    },
    [isDeleteOn]
  );

  return <ClubItem name={name} where={where} onClick={clickHandler} />;
};

export default ManagementClubItemContainer;
