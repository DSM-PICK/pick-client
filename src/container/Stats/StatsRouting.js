import React from "react";
import { Route, Switch } from "react-router-dom";
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
      </Switch>
    </>
  );
};

export default StatsRouting;
