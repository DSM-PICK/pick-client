import React from "react";
import DScheduleMiniCalander from "../MiniCalander/DScheduleMiniCalander";
import DScheduleExecl from "../Execl/DScheduleExecl";
import * as S from "../style";
import DScheduleCalander from "../Calander/DScheduleCalander";

const DScheduleBody = () => {
  return (
    <S.BodyContainer>
      <DScheduleMiniCalander />
      <DScheduleExecl />
      <DScheduleCalander />
    </S.BodyContainer>
  );
};

export default DScheduleBody;
