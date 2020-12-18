import React from "react";
import { Route, Switch } from "react-router-dom";
import NotFoundContainer from "../NotFound/NotFoundContainer";
import DesktopAccountContainer from "./DesktopAccountContainer";

const DesktopRouting = () => {
  return (
    <Switch>
      <Route path="/" component={DesktopAccountContainer} />

      <Route path="*" component={NotFoundContainer} />
    </Switch>
  );
};

export default DesktopRouting;
