import React, { memo } from "react";
import ModalClubItem from "../ModalClubItem/ModalClubItem";
import * as S from "./styles";

const ModalClubList = ({ one, two, three }) => {
  return (
    <S.Container>
      <S.Row>
        {one.map(({ name, number }) => (
          <ModalClubItem name={name} number={number} />
        ))}
      </S.Row>
      <S.Row>
        {two.map(({ name, number }) => (
          <ModalClubItem name={name} number={number} />
        ))}
      </S.Row>
      <S.Row>
        {three.map(({ name, number }) => (
          <ModalClubItem name={name} number={number} />
        ))}
      </S.Row>
    </S.Container>
  );
};

export default memo(ModalClubList);
