import React from "react";
import Background from "../../../Atoms/Background/Background";
import * as S from "./styles";

const AttendanceClassInfo = () => {
  const className = "2학년 2반";
  const teacherName = "신요셉";
  const allStdCnt = 20;
  const attendanceStdCnt = 18;

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
