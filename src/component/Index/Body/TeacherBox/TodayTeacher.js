import React from "react";
import * as S from "./styles";

const TodayTeacher = ({ floor, teacher }) => {
  return (
    <S.Container>
      <div>{floor}층</div>
      <div>{teacher}</div>
      <div>제2 교무실</div>
    </S.Container>
  );
};

export default TodayTeacher;
