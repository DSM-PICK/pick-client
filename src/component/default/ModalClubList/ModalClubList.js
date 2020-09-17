import React from "react";
import ModalClubItem from "../ModalClubItem/ModalClubItem";
import * as S from "./styles";

const ModalClubList = ({ one, two, three }) => {
  return (
    <S.Container>
      <S.Row>
        {one.map((data) => (
          <ModalClubItem />
        ))}
      </S.Row>
      <S.Row>
        {two.map((data) => (
          <ModalClubItem />
        ))}
      </S.Row>
      <S.Row>
        {three.map((data) => (
          <ModalClubItem />
        ))}
      </S.Row>
    </S.Container>
  );
};

export default ModalClubList;
