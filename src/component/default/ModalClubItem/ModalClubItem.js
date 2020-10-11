import React, { memo } from "react";
import * as S from "./styles";

const ModalClubItem = ({ number, name, onClick }) => {
  return (
    <S.Container onClick={onClick ? onClick : undefined}>
      {number} {name}
    </S.Container>
  );
};

export default memo(ModalClubItem);
