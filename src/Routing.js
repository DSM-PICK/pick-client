import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ScheduleContainer from './container/Schedule/ScheduleContainer';
import AttendanceContainer from './container/Attendance/AttendanceContainer';
import Main from './component/Main/Main';
import AdminNav from './component/Admin/AdminNav/AdminNav';
import Admin from './component/Admin/Admin';
import AdminMain from './component/Admin/AdminMain/AdminMain';

const Routing = () => {
	return (
		<Switch>
			<Route exact path="/schedule" component={ScheduleContainer} />
			<Route path="/admin" component={AdminMain} />
			<Route path="/attendance" component={AttendanceContainer} />
			<Route path="/main" component={Main} />
			{/* 404PAGE <Route component={NotFound} /> */}
		</Switch>
	);
};

export default Routing;
