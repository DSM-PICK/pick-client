import React, { useState } from 'react';
import * as S from './styles';
import AttendanceHeader from './header/AttedanceHeader';
import AttendanceBody from './body/AttendanceBody';
import { CLASS_ANCHOR_ITEMS } from './Constant';

const AttendanceClass = () => {
	const anchorItems = CLASS_ANCHOR_ITEMS;

	return (
		<S.Container>
			<AttendanceHeader text="교실 자습" />
			<AttendanceBody anchorItems={anchorItems} />
		</S.Container>
	);
};

export default AttendanceClass;
