import React from "react";
import { Route, Switch } from "react-router-dom";
import DesktopPreAbsenceContainer from "./DesktopPreAbsenceContainer";
import DesktopAttendanceContainer from "./DesktopAttendanceContainer";
import NotFoundContainer from "../NotFound/NotFoundContainer";

const DesktopRouting = () => {
  return (
    <Switch>
      <Route exact path="/pre-absence" component={DesktopPreAbsenceContainer} />
      <Route exact path="/attendance" component={DesktopAttendanceContainer} />

      <Route path="*" component={NotFoundContainer} />
    </Switch>
  );
};

export default DesktopRouting;
