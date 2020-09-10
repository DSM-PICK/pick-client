import React from "react";
import { Route, Switch } from "react-router-dom";
import ScheduleContainer from "./container/Schedule/ScheduleContainer";
import AttendanceContainer from "./container/Attendance/AttendanceContainer";
import Main from "./component/Main/Main";
import IndexContainer from "./container/Index/IndexContainer";
import AdminNav from './component/Admin/AdminNav/AdminNav';
import Admin from './component/Admin/Admin';
import AdminMain from './component/Admin/AdminMain/AdminMain';

const Routing = () => {
      <Route exact path="/" component={IndexContainer} />
      <Route exact path="/schedule" component={ScheduleContainer} />
      <Route exact path="/attendance" component={AttendanceContainer} />
      <Route exact path="/main" component={Main} />
			<Route path="/admin" component={AdminMain} />
};

export default Routing;
