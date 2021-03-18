import React, { useCallback } from "react";
import Header from "../../../component/Desktop/Organisms/Header/Header";
import { Logout } from "../../../lib/requestApi";

const DesktopHeaderContainer = () => {
  const userName = localStorage.getItem("teacherName");
  const onLogout = useCallback(() => {
    Logout("desktop");
  });

  return <Header userName={userName} onLogout={onLogout} />;
};

export default DesktopHeaderContainer;
