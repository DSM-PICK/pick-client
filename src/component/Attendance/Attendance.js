import React from 'react';
import * as S from './styles';
import AttendanceHeader from './header/AttedanceHeader';
import AttendanceBody from './body/AttendanceBody';

const Attendance = () => {
	return (
		<S.Container>
			<AttendanceHeader />
			<AttendanceBody />
		</S.Container>
	);
};

export default Attendance;
