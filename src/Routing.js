import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ScheduleContainer from './container/Schedule/ScheduleContainer';
import AttendanceContainer from './container/Attendance/AttendanceContainer';

const Routing = () => {
	return (
		<Switch>
			<Route exact path="/schedule" component={ScheduleContainer} />

			<Route exact path="/attendance" component={AttendanceContainer} />
			{/* 404PAGE <Route component={NotFound} /> */}
		</Switch>
	);
};

export default Routing;
