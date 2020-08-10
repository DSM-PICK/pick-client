import React from 'react';
import * as G from '../../GlobalStyle';
import { Switch, Route } from 'react-router-dom';
import Attendance from '../../component/Attendance/Attendance';
import AttendanceClass from '../../component/Attendance/ClassAttendance';
import AttendanceClub from '../../component/Attendance/ClubAttendance';

const AttendanceContainer = () => {
	return (
		<G.GlobalContainer>
			<Switch>
				<Route exact path="/attendance" component={Attendance} />
				<Route path="/attendance/class" component={AttendanceClass} />
				<Route path="/attendance/club" component={AttendanceClub} />
			</Switch>
		</G.GlobalContainer>
	);
};

export default AttendanceContainer;
