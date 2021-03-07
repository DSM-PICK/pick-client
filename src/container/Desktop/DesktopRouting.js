import React from "react";
import { Route, Switch } from "react-router-dom";
import NotFoundContainer from "../NotFound/NotFoundContainer";
import DesktopAccountContainer from "./DesktopAccountContainer";
import DesktopReportContainer from "./DesktopReportContainer";
import { DScheduleContainer } from "../../container";
import { DAuthPage } from "../../page";
import DesktopMainContainer from "./Main/DesktopMainContainer";
import DesktopStatsContainer from "./Stats/DesktopStatsContainer";

const DesktopRouting = () => {
  return (
    <Switch>
      <Route path="/" exact component={DesktopMainContainer} />
      {/* <Route path="/login" exact component={} /> */}
      {/* <Route path="/pre-report" exact component={} /> */}
      <Route path="/schedule" exact component={DScheduleContainer} />
      <Route path="/report" component={DesktopReportContainer} />
      <Route path="/auth" exact component={DAuthPage} />
      <Route path="/stats" exact component={DesktopStatsContainer} />

      <Route component={NotFoundContainer} />
    </Switch>
  );
};

export default DesktopRouting;
