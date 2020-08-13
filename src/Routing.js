import React from "react";
import { Route, Switch } from "react-router-dom";
import ScheduleContainer from "./container/Schedule/ScheduleContainer";
import AttendanceContainer from "./container/Attendance/AttendanceContainer";
import Main from "./component/Main/Main";
import IndexContainer from "./container/Index/IndexContainer";

const Routing = () => {
  return (
    <Switch>
      <Route exact path="/schedule" component={ScheduleContainer} />
      <Route exact path="/attendance" component={AttendanceContainer} />
      <Route exact path="/main" component={Main} />
      <Route exact path="/" component={IndexContainer} />
      {/* 404PAGE <Route component={NotFound} /> */}
    </Switch>
  );
};

export default Routing;
