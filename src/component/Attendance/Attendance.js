import React, { useState } from 'react';
import * as S from './styles';
import AttendanceHeader from './header/AttedanceHeader';
import AttendanceBody from './body/AttendanceBody';
import { MAIN_ANCHOR_ITEMS } from './Constant';
import Header from '../Header/Header';

const Attendance = () => {
	const anchorItems = MAIN_ANCHOR_ITEMS;

	return (
		<S.Container>
			<Header>출석</Header>
			<AttendanceBody anchorItems={anchorItems} />
		</S.Container>
	);
};

export default Attendance;
