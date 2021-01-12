import React from "react";
import * as S from "./styles";

const CurrentWrap = props => {
  const { floorData } = props;
  const { title, data } = floorData;
  console.log(floorData);

  return (
    <S.Container>
      <S.Header>
        <S.HeaderTitle>{title}</S.HeaderTitle>
      </S.Header>
    </S.Container>
  );
};

export default CurrentWrap;
