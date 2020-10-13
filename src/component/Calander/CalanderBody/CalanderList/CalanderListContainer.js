import React from "react";
import CalanderList from "./CalanderList";
import { useSelector } from "react-redux";

const CalanderListContainer = () => {
  const date = useSelector(state => state.calander.calanderArr);
  console.log(date);
  return <CalanderList list={date} />;
};

export default CalanderListContainer;
