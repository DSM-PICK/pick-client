import React from "react";
import Background from "../../../Atoms/Background/Background";
import * as S from "./styles";

const AttendanceClassInfo = props => {
  const { className, head, stdCount, stdCountWithoutEmployment } = props;

  return (
    <S.Container>
      <Background css={S.BackgroundCSS}>
        <S.ClassInfoContainer>
          <S.Header>{className}</S.Header>
          <S.Text>{head ? `담임교사 : ${head}` : `선생님이 없습니다.`}</S.Text>
          <S.Text>
            {stdCount ? `총 학생 : ${stdCount}명` : `학생 데이터가 없습니다.`}
          </S.Text>
          <S.Text>
            {stdCountWithoutEmployment
              ? `출석 예정 : ${stdCountWithoutEmployment}명`
              : `학생 데이터가 없습니다.`}
          </S.Text>
        </S.ClassInfoContainer>
      </Background>
    </S.Container>
  );
};

export default AttendanceClassInfo;
