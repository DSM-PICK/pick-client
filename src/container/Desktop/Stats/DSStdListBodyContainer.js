import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import SStdListBody from "../../../component/Desktop/Molecules/Stats/StatsStdList/StatsStdListBackground/SStdListBody/SStdListBody";
import { makeDate2Digit } from "../../../lib/attendanceApi";
import { DStatsActionCreater } from "../../../module/action/d_stats";

const DSStdListBodyContainer = () => {
  const dispatch = useDispatch();
  const {
    clickedFloor: clickedFloorArr,
    clickedPriority: clickedPriorityArr,
    statsAttendance,
    clickedPriorityArrPriority
  } = useSelector(state => state.dStats);
  const { year, month, day } = useSelector(state => state.schedule.selected);
  const selectedDateStr = `${year}-${makeDate2Digit(month)}-${makeDate2Digit(
    day
  )}`;
  const { calander } = useSelector(store => store.schedule.mini);
  const { selected } = useSelector(store => store.schedule);

  const [prevFloorArr, setPrevFloorArr] = useState([]);

  const {
    getSAttendanceDataSaga,
    setSClickedPriorityArrPriority,
    setSAttendanceData
  } = DStatsActionCreater;
  const dispatchSetSAttendanceData = useCallback(
    statsAttendance => {
      dispatch(setSAttendanceData({ statsAttendance }));
    },
    [dispatch]
  );
  const dispatchSetSClickedPriorityDispatch = useCallback(
    priority => {
      dispatch(
        setSClickedPriorityArrPriority({ clickedPriorityArrPriority: priority })
      );
    },
    [dispatch]
  );
  const getSAttendanceDataSagaDispatch = useCallback(
    payload => {
      dispatch(getSAttendanceDataSaga(payload));
    },
    [dispatch]
  );
  const selectObj = calander.find(
    ({ year, month, date }) =>
      year === selected.year &&
      month === selected.month &&
      date === selected.day
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

  useEffect(() => {
    const isFloorChange =
      JSON.stringify(prevFloorArr.map(data => data.text)) !==
      JSON.stringify(clickedPriorityArr.map(data => data.text));

    setPrevFloorArr(prev => (isFloorChange ? clickedPriorityArr : prev));

    if (selectObj && selectObj.schedule === "non-schedule") {
      dispatchSetSAttendanceData([]);
    } else {
      if (clickedPriorityArr.length && selectObj) {
        getSAttendanceDataSagaDispatch({
          schedule: selectObj.schedule,
          floor: clickedFloorText,
          priority: isFloorChange
            ? clickedPriorityArr[0].priority
            : clickedPriorityArr[clickedPriorityArrPriority].priority,
          date: selectedDateStr
        });
      }
    }
    if (isFloorChange) {
      dispatchSetSClickedPriorityDispatch(0);
    }
  }, [
    selectObj,
    clickedFloorText,
    clickedPriorityArrPriority,
    clickedPriorityArr,
    prevFloorArr,
    selectedDateStr
  ]);

  return <SStdListBody statsAttendance={statsAttendance} />;
};

export default DSStdListBodyContainer;
