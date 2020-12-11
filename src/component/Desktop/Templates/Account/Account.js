import React from "react";
import * as S from "./styles";
import LoginWrap from "../../Organisms/Account/LoginWrap/LoginWrap";
import SignupWrap from "../../Organisms/Account/SignupWrap/SignupWrap";
import { Route, Switch } from "react-router-dom";
import PwChangeWrap from "../../Organisms/Account/PwChangeWrap/PwChangeWrap";

const Account = () => {
  return (
    <S.Container>
      <Switch>
        <Route exact path={"/login"} component={LoginWrap} />
        <Route exact path={"/signup"} component={SignupWrap} />
        <Route exact path={"/change"} component={PwChangeWrap} />
      </Switch>
    </S.Container>
  );
};

export default Account;
