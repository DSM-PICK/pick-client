import React from "react";
import * as G from "../../GlobalStyle";
import Attendance from "../../component/Attendance/Attendance";

const AttendanceContainer = () => {
  console.log("atc rendering");
  return (
    <G.GlobalContainer>
      <Attendance />
    </G.GlobalContainer>
  );
};

export default AttendanceContainer;
