import React from "react";
import { Route, Switch } from "react-router-dom";
import ScheduleContainer from "./container/Schedule/ScheduleContainer";
import AttendanceContainer from "./container/Attendance/AttendanceContainer";
import Main from "./component/Main/Main";
import IndexContainer from "./container/Index/IndexContainer";
import AdminMain from "./component/Admin/AdminMain/AdminMain";
import AdminRouting from "./component/Admin/AdminRouting";

const Routing = () => {
  return (
    <Switch>
      <Route exact path="/" component={IndexContainer} />
      <Route exact path="/schedule" component={ScheduleContainer} />
      <Route path="/attendance" component={AttendanceContainer} />
      <Route exact path="/main" component={Main} />
      <Route path="/admin" component={AdminRouting} />
    </Switch>
  );
};

export default Routing;
