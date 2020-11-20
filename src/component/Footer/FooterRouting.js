import React from "react";
import { Switch, Route } from "react-router-dom";
import NavFooter from "./NavFooter/NavFooter";

const FooterRouting = () => {
  return (
    <Switch>
      <Route path={["/t/main", "/t/schedule"]} component={NavFooter} />
      <Route
        exact
        path={["/t/attendance/class", "/t/attendance/club"]}
        component={NavFooter}
      />
    </Switch>
  );
};

export default FooterRouting;
