import React from "react";
import * as S from "./style";

const NoScheduleWrap = props => {
  const { text, gif } = props;

  return (
    <S.Container>
      <S.GifWrapper gif={gif}>
        <S.Text>{text}</S.Text>
      </S.GifWrapper>
    </S.Container>
  );
};

export default NoScheduleWrap;
