import React, { useEffect } from "react";
import CalanderRow from "./row/CalanderRow";
import { useSelector } from "react-redux";

const CalanderList = () => {
  useEffect(() => {
    console.log("캘린더 리스트 렌더링");
  });
  const date = useSelector((state) => state.calander.calanderArr);
  return (
    <>
      {date.map((dateArr, index) => (
        <CalanderRow key={index} date={dateArr} />
      ))}
    </>
  );
};

export default CalanderList;
