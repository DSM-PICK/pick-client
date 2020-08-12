import React, { useState } from 'react';
import * as S from '../styles';
import AttendanceBody from '../body/AttendanceBody';
import Header from '../../Header/Header';
import { Link } from 'react-router-dom';
import { IoIosArrowBack } from 'react-icons/io';
import { CLASS_ANCHOR_ITEMS } from '../Constant';
import Footer from '../../Footer/Footer';

const AttendanceClass = () => {
	const anchorItems = CLASS_ANCHOR_ITEMS;

	return (
		<S.Container>
			<Header>
				<S.HeaderBackBtn as={Link} to="/main">
					<IoIosArrowBack />
				</S.HeaderBackBtn>
				<S.HeaderText>교실 자습</S.HeaderText>
			</Header>
			<AttendanceBody anchorItems={anchorItems} />
			<Footer />
		</S.Container>
	);
};

export default AttendanceClass;
