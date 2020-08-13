import React from 'react';
import * as S from './styles';
import AttendanceNavItem from './AttendanceNavItem/AttendanceNavItem';

const AttendanceNav = (props) => {
	const { floors } = props;

	console.log(floors);

	return (
		<S.Container>
			{floors.map((data, index) => (
				<AttendanceNavItem key={data.location} data={data} index={index} />
			))}
		</S.Container>
	);
};

export default AttendanceNav;
