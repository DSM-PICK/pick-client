import React, { useState } from 'react';
import * as S from './styles';
import AttendanceHeader from './header/AttedanceHeader';
import AttendanceBody from './body/AttendanceBody';
import { MAIN_ANCHOR_ITEMS } from './Constant';

const Attendance = () => {
	const anchorItems = MAIN_ANCHOR_ITEMS;

	return (
		<S.Container>
			<AttendanceHeader text="출석" />
			<AttendanceBody anchorItems={anchorItems} />
		</S.Container>
	);
};

export default Attendance;
