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
  const onChangePassword = useCallback(() => {
    history.push("/password-change");
  });

  return (
    <Header
      userName={userName}
      onLogout={onLogout}
      onChangePassword={onChangePassword}
    />
  );
};

export default React.memo(DesktopHeaderContainer);
