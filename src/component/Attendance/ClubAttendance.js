import React, { useState } from 'react';
import * as S from './styles';
import AttendanceHeader from './header/AttedanceHeader';
import AttendanceBody from './body/AttendanceBody';
import { CLUB_ANCHOR_ITEMS } from './Constant';

const AttendanceClub = () => {
	const anchorItems = CLUB_ANCHOR_ITEMS;

	return (
		<S.Container>
			<AttendanceHeader text="전공동아리" />
			<AttendanceBody anchorItems={anchorItems} />
		</S.Container>
	);
};

export default AttendanceClub;
