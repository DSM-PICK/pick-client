import React, { useCallback, useState } from "react";
import SelectWrap from "../../../../component/Desktop/Molecules/Attendance/AttendancePlace/AttendancePlaceBackground/SelectWrap/SelectWrap";

const DesktopSelectWrapContainer = () => {
  const selectArr = [
    {
      header: "학년",
      bodyItem: ["1학년", "2학년", "3학년", "기타"]
    },
    {
      header: "반",
      bodyItem: ["1반", "2반", "3반", "4반"]
    }
  ];

  const [currentArr, setCurrentArr] = useState(
    Array.from({ length: selectArr.length }, () => 0)
  );

  const setCurrentArrByIndex = useCallback(
    (row, col) => {
      setCurrentArr(
        currentArr.map((current, index) => (index === row ? col : current))
      );
    },
    [currentArr]
  );

  return (
    <SelectWrap
      selectArr={selectArr}
      currentArr={currentArr}
      onClick={setCurrentArrByIndex}
    />
  );
};

export default DesktopSelectWrapContainer;
