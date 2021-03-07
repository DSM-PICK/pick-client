import React from "react";
import Header from "../../../component/Desktop/Organisms/Header/Header";

const DesktopHeaderContainer = () => {
  const userName = localStorage.getItem("teacherName");

  return <Header userName={userName} />;
};

export default DesktopHeaderContainer;
