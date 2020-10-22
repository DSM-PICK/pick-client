import React from "react";
import { useSelector } from "react-redux";
import Main from "../../component/Main/Main";

const MainContainer = () => {
  const REMAIN_DATE = window.localStorage.getItem("remainDate");
  let mainText = useSelector(state => state.mainText.mainText);

  console.log(`${mainText} - mainText`);
  return <Main remain={REMAIN_DATE} text={mainText} />;
};

export default MainContainer;
