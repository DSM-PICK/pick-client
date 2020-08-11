import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ScheduleContainer from './container/Schedule/ScheduleContainer';
import AttendanceContainer from './container/Attendance/AttendanceContainer';
import Main from './component/Main/Main';

const Routing = () => {
	return (
		<Switch>
			<Route exact path="/schedule" component={ScheduleContainer} />

			<Route path="/attendance" component={AttendanceContainer} />
			<Route path="/main" component={Main} />
			{/* 404PAGE <Route component={NotFound} /> */}
		</Switch>
	);
};

export default Routing;
