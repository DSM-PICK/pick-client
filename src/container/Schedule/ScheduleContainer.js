import React, { useCallback, useEffect, useRef } from "react";
import ScheduleHeader from "../../component/ScheduleHeader/ScheduleHeader";
import Calander from "../../component/Calander/Calander";
// import Footer from "../../component/Footer/Footer";
import * as G from "../../GlobalStyle";
import { useHistory } from "react-router";
import { checkIsLogin } from "../../lib/requestApi";
import { useDispatch, useSelector } from "react-redux";
import { getScheduleSaga, setDate } from "../../module/action/calander";
import Footer from "../../component/Organisms/Footer/Footer";

const ScheduleContainer = () => {
  const { year, month } = useSelector(store => store.calander);
  const dispatch = useDispatch();
  const history = useHistory();
  const dragStartX = useRef();

  useEffect(() => {
    checkIsLogin().then(isLogin => {
      !isLogin && history.push("/");
    });
  }, []);

  const dragStart = useCallback(e => {
    dragStartX.current = e.clientX;
  }, []);

  const dragEnd = useCallback(
    e => {
      if (dragStartX.current - e.clientX > 0) {
        dispatch(
          setDate({
            year: month === 11 ? year + 1 : year,
            month: month === 11 ? 0 : month + 1
          })
        );
        dispatch(getScheduleSaga());
      } else {
        console.log(month === 0 ? 11 : month - 1);
        dispatch(
          setDate({
            year: month === 0 ? year - 1 : year,
            month: month === 0 ? 11 : month - 1
          })
        );
        dispatch(getScheduleSaga());
      }
    },
    [year, month]
  );

  return (
    <G.GlobalContainer draggable onDragStart={dragStart} onDragEnd={dragEnd}>
      <ScheduleHeader />
      <Calander />
      <Footer />
    </G.GlobalContainer>
  );
};

export default ScheduleContainer;
