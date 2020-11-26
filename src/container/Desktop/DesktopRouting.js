import React from "react";
import { Route, Switch } from "react-router-dom";
import NotFoundContainer from "../NotFound/NotFoundContainer";

const DesktopRouting = () => {
  return (
    <Switch>
      <Route path="/login" component={NotFoundContainer} />

      <Route path="*" component={NotFoundContainer} />
    </Switch>
  );
};

export default DesktopRouting;
