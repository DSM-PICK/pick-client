import React, { memo } from "react";
import * as S from "./styles";

const ModalClubItem = ({ number, name }) => {
  return (
    <S.Container>
      {number} {name}
    </S.Container>
  );
};

export default memo(ModalClubItem);
