import React from "react";
import { Switch, Route } from "react-router-dom";
import NavFooter from "./NavFooter/NavFooter";
import SaveFooter from "./SaveFooter/SaveFooter";

const FooterRouting = () => {
  return (
    <Switch>
      <Route
        path={["/main", "/calendar", "/bugreport", "/tonggei", "/schedule"]}
        component={NavFooter}
      />
      <Route
        exact
        path={["/attendance/class", "/attendance/club"]}
        component={NavFooter}
      />
      <Route
        path={["/attendance/class/", "/attendance/club/"]}
        component={SaveFooter}
      />
    </Switch>
  );
};

export default FooterRouting;
