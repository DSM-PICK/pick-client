import React from 'react';
import * as S from './styles';
import { Switch, Route } from 'react-router-dom';
import AttendanceClass from '../../component/Attendance/ClassAttendance/ClassAttendance';
import AttendanceClub from '../../component/Attendance/ClubAttendance/ClubAttendance';
import Attendancing from './Attendancing/Attendancing';

const AttendanceRouting = () => {
	return (
		<S.Container>
			<Switch>
				<Route exact path="/attendance/class" component={AttendanceClass} />
				<Route exact path="/attendance/club" component={AttendanceClub} />
				<Route
					path={['/attendance/class/', '/attendance/class/']}
					component={Attendancing}
				/>
			</Switch>
		</S.Container>
	);
};

export default AttendanceRouting;
