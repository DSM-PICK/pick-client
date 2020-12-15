import React from "react";
import { Route, Switch } from "react-router-dom";
import StatsMainContainer from "./StatsMainContainer";

const StatsRouting = () => {
  return (
    <>
      <Switch>
        <Route exact path={"/t/stats"} component={StatsMainContainer} />
      </Switch>
    </>
  );
};

export default StatsRouting;
