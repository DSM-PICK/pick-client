import React, { useState } from 'react';
import * as S from './styles';
import AttendanceHeader from './header/AttedanceHeader';
import AttendanceBody from './body/AttendanceBody';

const Attendance = () => {
	const [anchorItems, setAnchorItems] = useState([
		{
			text: '전공동아리',
			imgLink: 'src/asset/attendanceClubPng.png',
			link: '/attendance/club',
		},
		{
			text: '교실자습',
			imgLink: 'src/asset/attendanceClassPng.png',
			link: '/attendance/class',
		},
		{
			text: '교실자습',
			imgLink: '',
			link: '',
		},
	]);

	return (
		<S.Container>
			<AttendanceHeader text="출석" />
			<AttendanceBody anchorItems={anchorItems} />
		</S.Container>
	);
};

export default Attendance;
