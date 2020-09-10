import React from 'react';
import * as S from '../styles';
import AttendanceBody from '../body/AttendanceBody';
import Header from '../../Header/Header';
import { Link } from 'react-router-dom';
import { CLUB_ANCHOR_ITEMS } from '../Constant';
import Footer from '../../Footer/Footer';

const AttendanceClub = () => {
	const anchorItems = CLUB_ANCHOR_ITEMS;

	return (
		<S.Container>
			<Header>
				<S.HeaderBackBtn as={Link} to="/main" />
				<S.HeaderFloor>전공동아리</S.HeaderFloor>
			</Header>
			<AttendanceBody anchorItems={anchorItems} />
			<Footer />
		</S.Container>
	);
};

export default AttendanceClub;
