import React from "react";
import * as S from "./style";

const NoScheduleWrap = props => {
  const { text, textPadding, gif, gifSize } = props;

  return (
    <S.Container>
      <S.GifWrapper gif={gif} gifSize={gifSize} text={text}>
        <S.Text text={text} textPadding={textPadding}>
          {text}
        </S.Text>
      </S.GifWrapper>
    </S.Container>
  );
};

export default NoScheduleWrap;
