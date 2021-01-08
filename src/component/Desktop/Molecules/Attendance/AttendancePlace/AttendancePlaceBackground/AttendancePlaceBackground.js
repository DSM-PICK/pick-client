import React from "react";
import * as S from "./styles";
import Button from "../../../../Atoms/Button/Button";

const AttendancePlaceBackground = () => {
  const userName = "최아린";
  const subText = "2-2 담임이십니다";

  return (
    <S.Container>
      <S.BackgroundHeader>
        <S.TextWrap>
          <S.HeaderText>{`${userName} 선생님은`}</S.HeaderText>
          <S.HeaderText>{`${subText}`}</S.HeaderText>
        </S.TextWrap>
        <S.ButtonWrap>
          <Button
            text={"빠른 조회하기"}
            css={S.HeaderButtonCSS}
            onClick={() => console.log("빠른 조회하기")}
          />
        </S.ButtonWrap>
      </S.BackgroundHeader>
      <div></div>
      <S.BackgroundButtonWrap>
        <Button
          text={"조회하기"}
          css={S.ButtonCSS}
          onClick={() => console.log("조회하기")}
        />
      </S.BackgroundButtonWrap>
    </S.Container>
  );
};

export default AttendancePlaceBackground;
