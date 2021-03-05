import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import StatsRecordBackground from "../../../component/Desktop/Molecules/Stats/StatsRecord/StatsRecordBackground/StatsRecordBackground";
import { DStatsActionCreater } from "../../../module/action/d_stats";

const DSRecordBackgroundContainer = () => {
  const { stats } = useSelector(state => state.dStats);

  const { getStatsSaga } = DStatsActionCreater;
  const dispatch = useDispatch();

  const getStats = useCallback(
    grade => {
      dispatch(getStatsSaga(grade));
    },
    [dispatch]
  );

  useEffect(() => {
    getStats(1);
    getStats(2);
    getStats(3);
  }, []);

  const recordDataArr = [
    { title: "1학년", ...stats.first },
    { title: "2학년", ...stats.second },
    { title: "3학년", ...stats.third }
  ];

  return <StatsRecordBackground recordDataArr={recordDataArr} />;
};

export default DSRecordBackgroundContainer;
