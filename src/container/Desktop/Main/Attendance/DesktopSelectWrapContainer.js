import React from "react";
import SelectWrap from "../../../../component/Desktop/Molecules/Attendance/AttendancePlace/AttendancePlaceBackground/SelectWrap/SelectWrap";

const DesktopSelectWrapContainer = () => {
  const SelectArr = [
    {
      header: "학년",
      bodyItem: ["1학년", "2학년", "3학년", "기타"]
    },
    {
      header: "반",
      bodyItem: ["1반", "2반", "3반", "4반"]
    }
  ];

  return <SelectWrap selectArr={SelectArr} />;
};

export default DesktopSelectWrapContainer;
