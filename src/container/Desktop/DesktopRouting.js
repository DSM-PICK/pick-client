import React from "react";
import { Route, Switch } from "react-router-dom";
import NotFoundContainer from "../NotFound/NotFoundContainer";
import DesktopAccountContainer from "./DesktopAccountContainer";
import DesktopReportContainer from "./DesktopReportContainer";
import { DScheduleContainer } from "../../container";
import { DAuthPage } from "../../page";

const DesktopRouting = () => {
  return (
    <Switch>
      <Route path="/" exact component={DesktopAccountContainer} />
      {/* <Route path="/login" exact component={} /> */}
      {/* <Route path="/pre-report" exact component={} /> */}
      <Route path="/schedule" exact component={DScheduleContainer} />
      {/* <Route path="/stats" exact component={} /> */}
      <Route path="/report" component={DesktopReportContainer} />
      <Route path="/auth" exact component={DAuthPage} />
      <Route component={NotFoundContainer} />
    </Switch>
  );
};

export default DesktopRouting;
