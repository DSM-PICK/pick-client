import React, { useEffect } from "react";
import * as S from "./styles";
import { Switch, Route } from "react-router-dom";
import Attendancing from "./Attendancing/Attendancing";
import SelectAttendance from "./SelectAttendance/SelectAttendance";
import { checkPageWithLogin } from "../../lib/requestApi";

const AttendanceRouting = () => {
  useEffect(() => {
    checkPageWithLogin();
  }, []);

  return (
    <S.Container>
      <Switch>
        <Route
          exact
          path={["/t/attendance/self-study", "/t/attendance/club"]}
          component={SelectAttendance}
        />
        <Route
          path={["/t/attendance/self-study/", "/t/attendance/club/"]}
          component={Attendancing}
        />
      </Switch>
    </S.Container>
  );
};

export default AttendanceRouting;
