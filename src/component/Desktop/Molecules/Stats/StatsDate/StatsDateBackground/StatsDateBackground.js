import React, { useEffect } from "react";
import * as S from "./style";
import MiniCalander from "../../../../../../page/DSchedule/MiniCalander/DScheduleMiniCalander";
import { useDispatch } from "react-redux";
import {
  getScheduleMiniCalander,
  setSelectedDate
} from "../../../../../../module/action/schedule";

const StatsDateBackground = () => {
  const dispatch = useDispatch();
  const dateObj = new Date();
  const year = dateObj.getFullYear();
  const month = dateObj.getMonth() + 1;
  const day = dateObj.getDate();
  useEffect(() => {
    dispatch(setSelectedDate({ year, month, day }));
    dispatch(getScheduleMiniCalander({ year, month }));
  }, []);
  return (
    <S.Container>
      <MiniCalander />
    </S.Container>
  );
};

export default StatsDateBackground;
