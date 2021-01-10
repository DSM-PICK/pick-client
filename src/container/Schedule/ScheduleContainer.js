import React, { useCallback, useEffect, useRef } from "react";
import ScheduleHeader from "../../component/ScheduleHeader/ScheduleHeader";
import Calander from "../../component/Calander/Calander";
import * as G from "../../GlobalStyle";
import { useHistory } from "react-router";
import { checkIsLogin } from "../../lib/requestApi";
import { useDispatch, useSelector } from "react-redux";
import { getScheduleSaga, setDate } from "../../module/action/calander";
import Footer from "../../component/Organisms/Footer/Footer";

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
