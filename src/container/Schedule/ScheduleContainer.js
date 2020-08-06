import React from "react";
import ScheduleHeader from "../../component/ScheduleHeader/ScheduleHeader";
import Calander from "../../component/Calander/Calander";
import * as G from "../../GlobalStyle";

const ScheduleContainer = () => {
  return (
    <G.GlobalContainer>
      <ScheduleHeader />
      <Calander />
    </G.GlobalContainer>
  );
};

export default ScheduleContainer;
