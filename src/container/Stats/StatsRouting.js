import React from "react";
import { Route, Switch } from "react-router-dom";
import StatsForClassContainer from "./StatsForClassContainer";
import StatsForClassFloorContainer from "./StatsForClassFloorContainer";
import StatsMainContainer from "./StatsMainContainer";
import StatsScheduleFloorContainer from "./StatsScheduleFloorContainer";

const StatsRouting = () => {
  return (
    <>
      <Switch>
        <Route exact path={"/t/stats"} component={StatsMainContainer} />
        <Route
          exact
          path={"/t/stats/schedule"}
          component={StatsScheduleFloorContainer}
        />
        <Route
          exact
          path={"/t/stats/class"}
          component={StatsForClassFloorContainer}
        />
        <Route path={"/t/stats/class/"} component={StatsForClassContainer} />
      </Switch>
    </>
  );
};

export default StatsRouting;
