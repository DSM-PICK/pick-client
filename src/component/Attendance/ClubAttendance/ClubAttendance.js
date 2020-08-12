import React, { useState } from 'react';
import * as S from '../styles';
import AttendanceBody from '../body/AttendanceBody';
import Header from '../../Header/Header';
import { Link } from 'react-router-dom';
import { IoIosArrowBack } from 'react-icons/io';
import { CLUB_ANCHOR_ITEMS } from '../Constant';
import Footer from '../../Footer/Footer';

const AttendanceClub = () => {
	const anchorItems = CLUB_ANCHOR_ITEMS;

	return (
		<S.Container>
			<Header>
				<S.HeaderBackBtn as={Link} to="/main">
					<IoIosArrowBack />
				</S.HeaderBackBtn>
				<S.HeaderText>전공동아리</S.HeaderText>
			</Header>
			<AttendanceBody anchorItems={anchorItems} />
			<Footer />
		</S.Container>
	);
};

export default AttendanceClub;
