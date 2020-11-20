import React from "react";
import { Route, Switch } from "react-router-dom";
import ScheduleContainer from "./container/Schedule/ScheduleContainer";
import AttendanceContainer from "./container/Attendance/AttendanceContainer";
import IndexContainer from "./container/Index/IndexContainer";
import AdminRouting from "./component/Admin/AdminRouting";
import MainContainer from "./container/Main/MainContainer";
import DesktopRouting from "./container/Desktop/DesktopRouting";

const Routing = () => {
  return (
    <Switch>
      <Route exact path="/t/" component={IndexContainer} />
      <Route exact path="/t/schedule" component={ScheduleContainer} />
      <Route exact path="/t/main" component={MainContainer} />
      <Route path="/t/attendance" component={AttendanceContainer} />

      <Route path="/admin" component={AdminRouting} />

      <Route path="/" component={DesktopRouting} />
    </Switch>
  );
};

export default Routing;
