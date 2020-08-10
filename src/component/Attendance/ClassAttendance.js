import React, { useState } from 'react';
import * as S from './styles';
import AttendanceHeader from './header/AttedanceHeader';
import AttendanceBody from './body/AttendanceBody';

const AttendanceClass = () => {
	const [anchorItems, setAnchorItems] = useState([
		{
			text: '4층',
			imgLink: '',
			link: '/attendance/class/floor4',
		},
		{
			text: '3층',
			imgLink: '',
			link: '/attendance/class/floor3',
		},
		{
			text: '2층',
			imgLink: '',
			link: '/attendance/class/floor2',
		},
	]);

	return (
		<S.Container>
			<AttendanceHeader text="교실 자습" />
			<AttendanceBody anchorItems={anchorItems} />
		</S.Container>
	);
};

export default AttendanceClass;
