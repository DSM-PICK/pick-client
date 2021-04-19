import React from "react";
import DScheduleMiniCalander from "../MiniCalander/DScheduleMiniCalander";
import DScheduleExecl from "../Execl/DScheduleExecl";
import DScheduleCalander from "../Calander/DScheduleCalander";
import DScheduleChange from "../Change/DscheduleChange";
import DScheduleHelpMsg from "../HelpMsg/DScheduleHelpMsg";
import * as S from "../style";

const DScheduleBody = () => {
  return (
    <S.BodyContainer>
      <S.LeftContainer>
        <DScheduleMiniCalander />
        <DScheduleChange />
        <DScheduleExecl />
      </S.LeftContainer>
      <DScheduleCalander />
      <DScheduleHelpMsg />
    </S.BodyContainer>
  );
};

export default DScheduleBody;
