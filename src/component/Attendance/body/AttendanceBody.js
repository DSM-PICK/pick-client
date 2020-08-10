import React, { useState } from 'react';
import * as S from './styles';
import AttendanceAnchor from './anchor/AttendanceAnchor';

const AttendanceBody = () => {
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
	]);

	return (
		<S.Container>
			{anchorItems.map((anchorItems) => (
				<AttendanceAnchor
					key={anchorItems.imgLink}
					text={anchorItems.text}
					imgLink={anchorItems.imgLink}
					link={anchorItems.link}
				/>
			))}
		</S.Container>
	);
};

export default AttendanceBody;
