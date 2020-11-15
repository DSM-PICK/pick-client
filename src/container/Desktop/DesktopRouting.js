import React from "react";
import { Route, Switch } from "react-router-dom";
import DesktopPreAbsenceContainer from "./DesktopPreAbsenceContainer";
import DesktopAttendanceContainer from "./DesktopAttendanceContainer";

const DesktopRouting = () => {
  return (
    <Switch>
      <Route exact path="/pre-absence" component={DesktopPreAbsenceContainer} />
      <Route exact path="/attendance" component={DesktopAttendanceContainer} />
    </Switch>
  );
};

export default DesktopRouting;
