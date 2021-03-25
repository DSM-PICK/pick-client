import React, { useState } from "react";
import { useHistory } from "react-router";
import StatsPage from "../../../component/Desktop/Templates/StatsPage/StatsPage";
import { checkIsLogin } from "../../../lib/requestApi";

const DesktopStatsContainer = () => {
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

  return <StatsPage />;
};

export default DesktopStatsContainer;
