import React from "react";
import { Route, Switch } from "react-router-dom";
import ScheduleContainer from "./container/Schedule/ScheduleContainer";
import AttendanceContainer from "./container/Attendance/AttendanceContainer";
import Main from "./component/Main/Main";
import IndexContainer from "./container/Index/IndexContainer";
import AdminNav from './component/Admin/AdminNav/AdminNav';
import Admin from './component/Admin/Admin';
import AdminMain from './component/Admin/AdminMain/AdminMain';
import AdminClub from './component/Admin/AdminClub/AdminClub';
import AdminPrint from './component/Admin/AdminPrint/AdminPrint';
import AdminLogin from './component/Admin/AdminLogin/AdminLogin';
import AdminRouting from './component/Admin/AdminRouting';
import AdminContainer from './container/Admin/AdminContainer';

const Routing = () => {
<<<<<<< HEAD
	return (
		<Switch>
			<Route exact path="/schedule" component={ScheduleContainer} />
			<Route path="/admin" component={AdminContainer} />
			<Route path="/attendance" component={AttendanceContainer} />
			<Route path="/main" component={Main} />
			{/* 404PAGE <Route component={NotFound} /> */}
		</Switch>
	);
=======
	return (
		<Switch>
			<Route exact path="/" component={IndexContainer} />
			<Route exact path="/schedule" component={ScheduleContainer} />
			<Route exact path="/attendance" component={AttendanceContainer} />
			<Route exact path="/main" component={Main} />
			<Route path="/admin" component={AdminMain} />
		</Switch>
	);
>>>>>>> develop
};

export default Routing;
