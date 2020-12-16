import React from "react";
import { Route, Switch } from "react-router-dom";
import StatsForClassContainer from "./StatsForClassContainer";
import StatsMainContainer from "./StatsMainContainer";

const StatsRouting = () => {
  return (
    <>
      <Switch>
        <Route exact path={"/t/stats"} component={StatsMainContainer} />
        {/* <Route exact path={"/t/stats/schedule"} component={} /> */}
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
