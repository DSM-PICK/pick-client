import React, { useEffect } from "react";
import * as S from "./styles";
import { Switch, Route } from "react-router-dom";
import AttendanceClass from "../../component/Attendance/ClassAttendance/ClassAttendance";
import AttendanceClub from "../../component/Attendance/ClubAttendance/ClubAttendance";
import Attendancing from "./Attendancing/Attendancing";
import { checkPageWithLogin } from "../../lib/requestApi";

const AttendanceRouting = () => {
  useEffect(() => {
    checkPageWithLogin();
  }, []);
  return (
    <S.Container>
      <Switch>
        <Route exact path="/t/attendance/class" component={AttendanceClass} />
        <Route exact path="/t/attendance/club" component={AttendanceClub} />
        <Route
          path={["/t/attendance/class/", "/t/attendance/club/"]}
          component={Attendancing}
        />
      </Switch>
    </S.Container>
  );
};

export default AttendanceRouting;
