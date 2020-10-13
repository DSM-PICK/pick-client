import React, { useEffect } from "react";
import ScheduleHeader from "../../component/ScheduleHeader/ScheduleHeader";
import Calander from "../../component/Calander/Calander";
import Footer from "../../component/Footer/Footer";
import * as G from "../../GlobalStyle";
import { useHistory } from "react-router";
import { checkIsLogin } from "../../lib/requestApi";

const ScheduleContainer = () => {
  const history = useHistory();
  useEffect(() => {
    checkIsLogin().then(isLogin => {
      !isLogin && history.push("/");
    });
  }, []);
  return (
    <G.GlobalContainer>
      <ScheduleHeader />
      <Calander />
      <Footer />
    </G.GlobalContainer>
  );
};

export default ScheduleContainer;
