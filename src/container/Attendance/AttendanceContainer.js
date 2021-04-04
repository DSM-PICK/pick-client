import React, { useEffect } from "react";
import * as G from "../../GlobalStyle";
import Attendance from "../../component/Attendance/Attendance";
import { useDispatch } from "react-redux";
import { DAttendanceActionCreater } from "../../module/action/d_attendance";

const AttendanceContainer = () => {
  const dispatch = useDispatch();

  const { getMemoFloorDataSaga } = DAttendanceActionCreater;

  useEffect(() => {
    dispatch(getMemoFloorDataSaga());
  }, []);

  return (
    <G.GlobalContainer>
      <Attendance />
    </G.GlobalContainer>
  );
};

export default AttendanceContainer;
