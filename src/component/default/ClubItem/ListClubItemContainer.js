import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import ClubItem from "./ClubItem";
import modalAction from "../../../module/action/modal";
import { updateClubDetail } from "../../../module/action/club";

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

const ListClubItemContainer = ({ id, where, name }) => {
  const dispatch = useDispatch();
  const clickHandler = useCallback(() => {
    dispatch(updateClubDetail(data));
    dispatch(modalAction.creater.modalOn());
  }, []);
  return <ClubItem name={name} where={where} id={id} onClick={clickHandler} />;
};

export default ListClubItemContainer;
