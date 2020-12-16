import React from "react";
import { Route, Switch } from "react-router-dom";
import StatsForClassContainer from "./StatsForClassContainer";
import StatsMainContainer from "./StatsMainContainer";
import StatsScheduleContainer from "./StatsScheduleContainer";

const StatsRouting = () => {
  return (
    <>
      <Switch>
        <Route exact path={"/t/stats"} component={StatsMainContainer} />
        <Route
          exact
          path={"/t/stats/schedule"}
          component={StatsScheduleContainer}
        />
        <Route
          exact
          path={"/t/stats/class"}
          component={StatsForClassContainer}
        />
      </Switch>
    </>
  );
};

export default StatsRouting;
