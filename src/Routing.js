import React from "react";
import { Route, Switch } from "react-router-dom";
import ScheduleContainer from "./container/Schedule/ScheduleContainer";
import AttendanceContainer from "./container/Attendance/AttendanceContainer";
import IndexContainer from "./container/Index/IndexContainer";
import AdminRouting from "./component/Admin/AdminRouting";
import MainContainer from "./container/Main/MainContainer";

const Routing = () => {
  console.log("라우팅");
  return (
    <Switch>
      <Route exact path="/" component={IndexContainer} />
      <Route path="/attendance" component={AttendanceContainer} />
      <Route exact path="/schedule" component={ScheduleContainer} />
      <Route path="/attendance" component={AttendanceContainer} />
      <Route exact path="/main" component={MainContainer} />
      <Route path="/admin" component={AdminRouting} />
    </Switch>
  );
};

export default Routing;
