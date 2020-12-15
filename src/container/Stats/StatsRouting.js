import React from "react";
import { Route, Switch } from "react-router-dom";
import StatsContainer from "./StatsContainer";

const StatsRouting = () => {
  return (
    <>
      <Switch>
        <Route exact path={"/t/stats"} component={StatsContainer} />
      </Switch>
    </>
  );
};

export default StatsRouting;
