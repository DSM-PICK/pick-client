import React, { useState } from "react";
import { useHistory } from "react-router";
import { checkIsLogin } from "../../lib/requestApi";
import { DSchedulePage } from "../../page";
import DesktopHeaderContainer from "../Desktop/Header/DesktopHeaderContainer";

const DScheduleContainer = () => {
  const history = useHistory();
  const [login, setLogin] = useState(false);
  checkIsLogin().then(isLogin => {
    if (!isLogin) {
      alert("로그인 후 이용하실 수 있습니다.");
      history.push("/auth");
    }
    setLogin(true);
  }, []);

  if (!login) {
    return <div></div>;
  }

  return (
    <>
      <DesktopHeaderContainer />
      <DSchedulePage />
    </>
  );
};

export default DScheduleContainer;
