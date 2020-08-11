import React from 'react';
import * as G from '../../GlobalStyle';
import { Switch, Route } from 'react-router-dom';
import AttendanceRouting from '../../component/Attendance/AttendanceRouting';

const AttendanceContainer = () => {
	return (
		<G.GlobalContainer>
			<AttendanceRouting />
		</G.GlobalContainer>
	);
};

export default AttendanceContainer;
