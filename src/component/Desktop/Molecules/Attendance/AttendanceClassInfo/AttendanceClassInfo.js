import React from "react";
import Background from "../../../Atoms/Background/Background";
import * as S from "./styles";

const AttendanceClassInfo = props => {
  const { className, teacherName, allStdCnt, attendanceStdCnt } = props;

  return (
    <S.Container>
      <Background css={S.BackgroundCSS}>
        <S.ClassInfoContainer>
          <S.Header>{className}</S.Header>
          <S.Text>
            {teacherName ? `담임교사 : ${teacherName}` : `선생님이 없습니다.`}
          </S.Text>
          <S.Text>
            {allStdCnt ? `총 학생 : ${allStdCnt}명` : `학생 데이터가 없습니다.`}
          </S.Text>
          <S.Text>
            {attendanceStdCnt
              ? `출석 예정 : ${attendanceStdCnt}명`
              : `학생 데이터가 없습니다.`}
          </S.Text>
        </S.ClassInfoContainer>
      </Background>
    </S.Container>
  );
};

export default AttendanceClassInfo;
