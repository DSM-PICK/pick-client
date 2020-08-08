import React from "react";
import { Route, Switch } from "react-router-dom";
import ScheduleContainer from "./container/Schedule/ScheduleContainer";

const Routing = () => {
  return (
    <Switch>
      <Route exact path="/schedule" component={ScheduleContainer} />
      {/* 404PAGE <Route component={NotFound} /> */}
    </Switch>
  );
};

export default Routing;
