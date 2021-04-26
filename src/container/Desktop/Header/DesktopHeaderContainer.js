import React, { useCallback } from "react";
import { useHistory } from "react-router";
import Header from "../../../component/Desktop/Organisms/Header/Header";
import { Logout } from "../../../lib/requestApi";

const DesktopHeaderContainer = () => {
  const history = useHistory();

  const userName = localStorage.getItem("teacherName");
  const onLogout = useCallback(() => {
    Logout("desktop");
  });
  const onPasswordChange = () => {
    history.push("/password-change");
  };

  return (
    <Header
      userName={userName}
      onLogout={onLogout}
      onPasswordChange={onPasswordChange}
    />
  );
};

export default React.memo(DesktopHeaderContainer);
