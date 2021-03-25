import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import Main from "../../../component/Desktop/Templates/Main/Main";
import { checkIsLogin } from "../../../lib/requestApi";

const DesktopMainContainer = () => {
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

  return <Main />;
};

export default React.memo(DesktopMainContainer);
