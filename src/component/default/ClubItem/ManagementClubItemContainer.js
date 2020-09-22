import React, { useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";
import { updateClubDetail } from "../../../module/action/club";
import modalAction from "../../../module/action/modal";
import ClubItem from "./ClubItem";

const data = {
  where: "제1동아리실",
  name: "제1 동아리",
  teacher: "선생님1",
  owner: "부장1",
  people: {
    one: [{ number: 1111, name: "부원1" }],
    two: [
      { number: 2222, name: "부원2" },
      { number: 2222, name: "부원22" }
    ],
    three: [
      { number: 3333, name: "부원3" },
      { number: 3333, name: "부원33" },
      { number: 3333, name: "부원333" }
    ]
  }
};
const ManagementClubItemContainer = ({
  name,
  where,
  id,
  isDeleteOn,
  changeSelectItem
}) => {
  const dispatch = useDispatch();
  const clickHandler = useCallback(
    e => {
      if (isDeleteOn) {
        changeSelectItem(id);
        e.target.classList.toggle("active");
        return;
      }
      dispatch(updateClubDetail(data));
      dispatch(modalAction.creater.modalOn());
    },
    [isDeleteOn]
  );

  return <ClubItem name={name} where={where} onClick={clickHandler} />;
};

export default ManagementClubItemContainer;
