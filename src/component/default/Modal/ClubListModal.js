import React, { useCallback } from "react";
import ModalClubList from "../ModalClubList/ModalClubList";
import * as S from "./styles";
import { useSelector } from "react-redux";
import withModal from "./Modal";

const ClubListModal = () => {
  const data = useSelector(state => state.club.detail);
  const {
    name,
    where,
    teacher,
    owner,
    people: { one, two, three }
  } = data;

  return (
    <>
      <S.Header>
        <S.EmptyBox />
        <S.HeaderCenter>
          <div>{name}</div>
          <div>{where}</div>
        </S.HeaderCenter>
        <S.HeaderRight>
          <div>담당 : {teacher}</div>
          <div>부장 : {owner}</div>
        </S.HeaderRight>
      </S.Header>
      <S.Hr />
      <S.Body>
        <ModalClubList one={one} two={two} three={three} />
      </S.Body>
    </>
  );
};

export default withModal(ClubListModal);
