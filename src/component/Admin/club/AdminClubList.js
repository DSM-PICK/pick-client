import React from "react";
import { useSelector } from "react-redux";
import ClubList from "../../default/ClubList/ClubList";
import ClubListModal from "../../default/Modal/ClubListModal";
import * as S from "./styles";

const AdminClubList = () => {
  const data = useSelector(state => state.club.list);

  return (
    <S.Container>
      <S.Header>동아리 목록</S.Header>
      <S.Body>
        <ClubList data={data} />
      </S.Body>
      <ClubListModal />
    </S.Container>
  );
};

export default AdminClubList;
