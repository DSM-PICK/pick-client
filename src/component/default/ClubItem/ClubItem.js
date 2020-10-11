import React from "react";
import * as S from "./style";

const ClubItem = ({ name, where, onClick }) => {
  return (
    <S.Container onClick={onClick}>
      <S.CircleName>{name}</S.CircleName>
      <S.Where>{where}</S.Where>
    </S.Container>
  );
};

export default ClubItem;
