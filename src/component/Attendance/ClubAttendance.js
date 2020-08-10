import React, { useState } from 'react';
import * as S from './styles';
import AttendanceHeader from './header/AttedanceHeader';
import AttendanceBody from './body/AttendanceBody';

const AttendanceClub = () => {
	const [anchorItems, setAnchorItems] = useState([
		{
			text: '4층',
			imgLink: '',
			link: '/attendance/club/floor4',
		},
		{
			text: '3층',
			imgLink: '',
			link: '/attendance/club/floor3',
		},
		{
			text: '2층',
			imgLink: '',
			link: '/attendance/club/floor2',
		},
		{
			text: '자습실',
			imgLink: '',
			link: '/attendance/club/selfstudy',
		},
	]);

	return (
		<S.Container>
			<AttendanceHeader text="전공동아리" />
			<AttendanceBody anchorItems={anchorItems} />
		</S.Container>
	);
};

export default AttendanceClub;
