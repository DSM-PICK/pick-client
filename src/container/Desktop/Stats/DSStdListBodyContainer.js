import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import SStdListBody from "../../../component/Desktop/Molecules/Stats/StatsStdList/StatsStdListBackground/SStdListBody/SStdListBody";
import { makeDate2Digit } from "../../../lib/attendanceApi";
import { DStatsActionCreater } from "../../../module/action/d_stats";

const DSStdListBodyContainer = () => {
  const {
    clickedFloor: clickedFloorArr,
    clickedPriority: clickedPriorityArr,
    statsAttendance
  } = useSelector(state => state.dStats);
  const { year, month, day } = useSelector(state => state.schedule.selected);
  const selectedDateStr = `${year}-${makeDate2Digit(month)}-${makeDate2Digit(
    day
  )}`;
  const dispatch = useDispatch();
  const { getSAttendanceDataSaga } = DStatsActionCreater;
  const getSAttendanceDataSagaDispatch = useCallback(
    payload => {
      dispatch(getSAttendanceDataSaga(payload));
    },
    [dispatch]
  );

  const floorText2apiFloorText = {
    "4층": 4,
    "3층": 3,
    "2층": 2,
    기타: 1
  };
  const [clickedFloorText] = clickedFloorArr
    .map(data => data.isClicked && floorText2apiFloorText[data.text])
    .filter(data => data);
  const [clickedPriority] = clickedPriorityArr
    .map(data => data.isClicked && data.priority)
    .filter(data => data !== false);

  useEffect(() => {
    getSAttendanceDataSagaDispatch({
      schedule: "self-study",
      floor: clickedFloorText,
      priority: clickedPriority,
      date: selectedDateStr
    });
  }, [clickedFloorText, clickedPriority, clickedPriorityArr, selectedDateStr]);

  return <SStdListBody statsAttendance={statsAttendance} />;
};

export default DSStdListBodyContainer;
