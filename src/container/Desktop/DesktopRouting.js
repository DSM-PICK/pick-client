import React from "react";
import { Route, Switch } from "react-router-dom";
import NotFoundContainer from "../NotFound/NotFoundContainer";
import DesktopLoginContainer from "./DesktopLoginContainer";

const DesktopRouting = () => {
  return (
    <Switch>
      <Route path="/login" component={DesktopLoginContainer} />

      <Route path="*" component={NotFoundContainer} />
    </Switch>
  );
};

export default DesktopRouting;
