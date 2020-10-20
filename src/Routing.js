import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import ScheduleContainer from "./container/Schedule/ScheduleContainer";
import AttendanceContainer from "./container/Attendance/AttendanceContainer";
import IndexContainer from "./container/Index/IndexContainer";
import AdminRouting from "./component/Admin/AdminRouting";
import MainContainer from "./container/Main/MainContainer";
import NotFoundContainer from "./container/NotFound/NotFoundContainer";

const Routing = () => {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <Switch>
      <Route exact path="/" component={IndexContainer} />
      <Route exact path="/schedule" component={ScheduleContainer} />
      <Route exact path="/main" component={MainContainer} />
      <Route path="/attendance" component={AttendanceContainer} />
      <Route path="/admin" component={AdminRouting} />
      <Route path={["/bugreport", "/tonggei"]} component={NotFoundContainer} />
      <Route path="*" component={NotFoundContainer} />
    </Switch>
  );
};

export default Routing;
