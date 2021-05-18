import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import StatsRecordBackground from "../../../component/Desktop/Molecules/Stats/StatsRecord/StatsRecordBackground/StatsRecordBackground";
import { makeDate2Digit } from "../../../lib/attendanceApi";
import { DStatsActionCreater } from "../../../module/action/d_stats";

const DSRecordBackgroundContainer = () => {
  const dispatch = useDispatch();
  const { stats } = useSelector(state => state.dStats);
  const { calander } = useSelector(state => state.schedule.mini);
  const { selected } = useSelector(state => state.schedule);
  const { getStatsSaga } = DStatsActionCreater;

  const selectObj = calander.find(
    ({ year, month, date }) =>
      year === selected.year &&
      month === selected.month &&
      date === selected.day
  );
  const recordDataArr = [
    { title: "1학년", ...stats.first },
    { title: "2학년", ...stats.second },
    { title: "3학년", ...stats.third }
  ];

  const getStats = useCallback(
    (grade, date) => {
      dispatch(getStatsSaga({ grade, date }));
    },
    [dispatch]
  );

  useEffect(() => {
    if (selectObj) {
      const { year, month, date: day } = selectObj;
      const date = `${year}-${makeDate2Digit(month)}-${makeDate2Digit(day)}`;

      getStats(1, date);
      getStats(2, date);
      getStats(3, date);
    } else {
      getStats(1);
      getStats(2);
      getStats(3);
    }
  }, [selectObj]);

  return <StatsRecordBackground recordDataArr={recordDataArr} />;
};

export default DSRecordBackgroundContainer;
