import React, { useEffect } from "react";
import CalanderRow from "./CalanderRow/CalanderRow";

const CalanderList = ({ list }) => {
  return (
    <>
      {list.map((dateArr, index) => (
        <CalanderRow key={index} dateArr={dateArr} />
      ))}
    </>
  );
};

export default CalanderList;
