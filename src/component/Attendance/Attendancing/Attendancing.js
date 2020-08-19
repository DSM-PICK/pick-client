import React from 'react';
import * as S from './styles';
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';
import Body from '../../Body/Body';
import AttendanceNav from './AttendanceNav/AttendanceNav';
import * as Data from './Constant';
import { Link } from 'react-router-dom';
import AttendanceSection from './AttendanceSection/AttendanceSection';

const getFloorText = (floorName) => {
	return floorName[floorName.length - 1] === 'y'
		? '자습실'
		: `${Number(floorName[floorName.length - 1])}층`;
};

const getFloorData = (floor) => {
	// console.log(Data);
	// console.log(Data.CLUB_FLOOR2);
	return Data.CLUB_FLOOR2;
};

const getDay = (floorData) => {
	let month = String(floorData.date).substring(0, 2);
	let day = String(floorData.date).substring(2, 4);
	if (month[0] == 0) {
		month = month[1];
	}
	if (day[0] == 0) {
		day = day[1];
	}
	return [month, day];
};

const isClub = () => {
	return location.pathname[15] === 's' ? false : true;
};

const Attendancing = ({ location }) => {
	const Floor = getFloorText(location.pathname.split('/')[3]);

	const floorData = getFloorData();
	const today = getDay(floorData);

	const to = `/${location.pathname.split('/')[1]}/${
		location.pathname.split('/')[2]
	}`;

	return (
		<S.Container>
			<Header>
				<S.HeaderWhere>
					<S.HeaderBackBtn as={Link} to={to} />
					<S.HeaderFloor>{Floor}</S.HeaderFloor>
				</S.HeaderWhere>
				<S.HeaderWhen>
					<S.HeaderMonthAndDay>{`${today[0]}월 ${today[1]}일`}</S.HeaderMonthAndDay>
					<S.HeaderDayOfTheWeek>{`${floorData.dayOfWeek}요일`}</S.HeaderDayOfTheWeek>
				</S.HeaderWhen>
				<S.HeaderWho>{`감독교사 ${floorData.teacherName}`}</S.HeaderWho>
			</Header>
			<Body>
				{Floor !== '자습실' && <AttendanceNav floors={floorData.locations} />}
				{isClub() && <AttendanceSection data0={Data.CLUB_FLOOR4_0} />}
			</Body>
			<Footer />
		</S.Container>
	);
};

export default Attendancing;
