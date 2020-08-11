import React from 'react';
import * as S from './styles';
import { Switch, Route } from 'react-router-dom';
import Attendance from '../../component/Attendance/Attendance';
import AttendanceClass from '../../component/Attendance/ClassAttendance';
import AttendanceClub from '../../component/Attendance/ClubAttendance';

const AttendanceRouting = () => {
	return (
		<S.Container>
			<Switch>
				<Route exact path="/attendance" component={Attendance} />
				<Route path="/attendance/class" component={AttendanceClass} />
				<Route path="/attendance/club" component={AttendanceClub} />
			</Switch>
		</S.Container>
	);
};

export default AttendanceRouting;
