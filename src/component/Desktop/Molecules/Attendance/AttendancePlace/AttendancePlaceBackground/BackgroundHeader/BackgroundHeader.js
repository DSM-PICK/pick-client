import React from "react";
import * as S from "./styles";
import Button from "../../../../../Atoms/Button/Button";

const BackgroundHeader = props => {
  const { teacherName, locationName } = props;
  const { onClickFastSearchBtn } = props;

  return (
    <S.Container>
      <S.TextWrap>
        <S.HeaderText>{`${teacherName} 선생님은`}</S.HeaderText>
        <S.HeaderText>{`${locationName} 담임입니다.`}</S.HeaderText>
      </S.TextWrap>
      <S.ButtonWrap>
        <Button
          text={"빠른 조회하기"}
          css={S.HeaderButtonCSS}
          onClick={() => onClickFastSearchBtn("빠른 조회하기")}
        />
      </S.ButtonWrap>
    </S.Container>
  );
};

export default BackgroundHeader;
