import React, { useCallback } from "react";
import ModalClubList from "../ModalClubList/ModalClubList";
import * as S from "./styles";
import { useSelector } from "react-redux";
import withModal from "./Modal";

const ClubListModal = () => {
  const {
    club: { name, location, teacher, club_head, floor, priority },
    students
  } = useSelector(state => state.club.detail);

  return (
    <>
      <S.Header>
        <S.EmptyBox />
        <S.HeaderCenter>
          <div>{name}</div>
          <div>{location}</div>
        </S.HeaderCenter>
        <S.HeaderRight>
          <div>담당 : {teacher || "선생님이 없어요"}</div>
          <div>부장 : {club_head}</div>
        </S.HeaderRight>
      </S.Header>
      <S.Hr />
      <S.Body>
        <ModalClubList list={students} />
      </S.Body>
    </>
  );
};

export default withModal(ClubListModal);
