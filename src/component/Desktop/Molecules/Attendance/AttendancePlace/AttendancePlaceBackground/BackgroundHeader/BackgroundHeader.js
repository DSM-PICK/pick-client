import React from "react";
import * as S from "./styles";
import Button from "../../../../../Atoms/Button/Button";

const BackgroundHeader = props => {
  const { teacherName } = props;
  const subText = "2-2 담임이십니다";

  return (
    <S.Container>
      <S.TextWrap>
        <S.HeaderText>{`${teacherName} 선생님은`}</S.HeaderText>
        <S.HeaderText>{`${subText}`}</S.HeaderText>
      </S.TextWrap>
      <S.ButtonWrap>
        <Button
          text={"빠른 조회하기"}
          css={S.HeaderButtonCSS}
          onClick={() => console.log("빠른 조회하기")}
        />
      </S.ButtonWrap>
    </S.Container>
  );
};

export default BackgroundHeader;
