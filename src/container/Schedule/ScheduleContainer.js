import React from "react";
import ScheduleHeader from "../../component/ScheduleHeader/ScheduleHeader";
import Calander from "../../component/Calander/Calander";
import Footer from "../../component/Footer/Footer";
import * as G from "../../GlobalStyle";

const ScheduleContainer = () => {
  return (
    <G.GlobalContainer>
      <ScheduleHeader />
      <Calander />
      <Footer />
    </G.GlobalContainer>
  );
};

export default ScheduleContainer;
