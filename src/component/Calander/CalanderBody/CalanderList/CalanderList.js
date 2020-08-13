import React, { useEffect } from "react";
import CalanderRow from "./CalanderRow/CalanderRow";

const CalanderList = ({ list }) => {
  useEffect(() => {
    console.log("CalanderList");
  });
  return (
    <>
      {list.map((dateArr, index) => (
        <CalanderRow key={index} date={dateArr} />
      ))}
    </>
  );
};

export default CalanderList;
