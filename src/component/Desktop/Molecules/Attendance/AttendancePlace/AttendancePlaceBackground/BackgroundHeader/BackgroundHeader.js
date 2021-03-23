import React from "react";
import * as S from "./styles";
import Button from "../../../../../Atoms/Button/Button";

const BackgroundHeader = props => {
  const { teacherName, locationName, nowUngranted } = props;
  const { onClickFastSearchBtn } = props;

  return (
    <S.Container>
      <S.TextWrap>
        {nowUngranted ? (
          <>
            <S.HeaderText>{`${teacherName} 선생님은`}</S.HeaderText>
            <S.HeaderText>{`담당이 없습니다.`}</S.HeaderText>
          </>
        ) : (
          <>
            <S.HeaderText>{`${teacherName} 선생님은`}</S.HeaderText>
            <S.HeaderText>{`${locationName} 담당입니다.`}</S.HeaderText>
          </>
        )}
      </S.TextWrap>
      <S.ButtonWrap>
        <Button
          text={"빠른 조회하기"}
          css={S.HeaderButtonCSS}
          onClick={() =>
            nowUngranted ? "" : onClickFastSearchBtn("빠른 조회하기")
          }
          buttonDisabled={nowUngranted}
        />
      </S.ButtonWrap>
    </S.Container>
  );
};

export default React.memo(BackgroundHeader);
