import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import SStdListBody from "../../../component/Desktop/Molecules/Stats/StatsStdList/StatsStdListBackground/SStdListBody/SStdListBody";
import { DStatsActionCreater } from "../../../module/action/d_stats";

const DSStdListBodyContainer = () => {
  const {
    clickedFloor: clickedFloorArr,
    clickedPriority: clickedPriorityArr,
    statsAttendance
  } = useSelector(state => state.dStats);

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
      priority: clickedPriority
    });
  }, [clickedFloorText, clickedPriority, clickedPriorityArr]);

  return <SStdListBody statsAttendance={statsAttendance} />;
};

export default DSStdListBodyContainer;
