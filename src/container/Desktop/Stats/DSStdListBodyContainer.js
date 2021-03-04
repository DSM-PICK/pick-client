import React from "react";
import { useSelector } from "react-redux";
import SStdListBody from "../../../component/Desktop/Molecules/Stats/StatsStdList/StatsStdListBackground/SStdListBody/SStdListBody";

const DSStdListBodyContainer = () => {
  const attendanceLists = useSelector(
    state => state.dAttendance.attendanceData
  );

  return <SStdListBody attendanceLists={attendanceLists} />;
};

export default DSStdListBodyContainer;
