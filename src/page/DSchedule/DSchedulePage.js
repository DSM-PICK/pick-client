import React from "react";
import * as S from "./style";

const DSchedulePage = () => {
  return (
    <S.Container>
      <S.GlobalStyle />
      <S.Header>
        <S.ControlerWrap>
          <S.MoveMonth>
            <S.Triangle />
          </S.MoveMonth>
          <S.ShowDay>오늘</S.ShowDay>
          <S.MoveMonth>
            <S.Triangle x={180} />
          </S.MoveMonth>
        </S.ControlerWrap>
        <S.ShowDate>2021년 1월</S.ShowDate>
      </S.Header>
    </S.Container>
  );
};

export default DSchedulePage;
