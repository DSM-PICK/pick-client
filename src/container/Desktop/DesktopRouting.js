import React, { useEffect } from "react";
import { Route, Switch, useHistory } from "react-router-dom";
import NotFoundContainer from "../NotFound/NotFoundContainer";
import DesktopReportContainer from "./DesktopReportContainer";
import { DScheduleContainer } from "../../container";
import { DAuthPage } from "../../page";
import DesktopStatsContainer from "./Stats/DesktopStatsContainer";
import DesktopMainContainer from "./Main/DesktopMainContainer";

const DesktopRouting = () => {
  const history = useHistory();
  useEffect(() => {
    history.push("/t");
  }, []);

  return (
    <Switch>
      <Route path="/" exact component={DesktopMainContainer} />
      <Route path="/auth" exact component={DAuthPage} />
      <Route path="/report" component={DesktopReportContainer} />
      <Route path="/schedule" exact component={DScheduleContainer} />
      <Route path="/stats" exact component={DesktopStatsContainer} />

      <Route component={NotFoundContainer} />
    </Switch>
  );
};

export default DesktopRouting;
