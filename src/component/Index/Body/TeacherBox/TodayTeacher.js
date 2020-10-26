import React from "react";
import * as S from "./styles";

const TodayTeacher = ({ floor, teacher }) => {
  return (
    <S.Container>
      <div>{floor}층</div>
      <div>{teacher}</div>
    </S.Container>
  );
};

export default TodayTeacher;
