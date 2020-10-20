import React, { memo } from "react";
import ModalClubItem from "../ModalClubItem/ModalClubItem";
import * as S from "./styles";

const ModalClubList = ({ list }) => {
  return (
    <S.Container>
      <S.Row>
        {list.map(({ num, name }) => (
          <ModalClubItem key={num + name} name={name} number={num} />
        ))}
      </S.Row>
    </S.Container>
  );
};

export default memo(ModalClubList);
