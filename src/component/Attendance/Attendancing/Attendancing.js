import React from 'react';
import * as S from './styles';
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';
import Body from '../../Body/Body';

const onBack = () => {
	history.back();
};

const getFloorText = (floorName) => {
	return floorName[floorName.length - 1] === 'y'
		? '자습실'
		: `${Number(floorName[floorName.length - 1])}층`;
};

const Attendancing = ({ location }) => {
	const Floor = getFloorText(location.pathname.split('/')[3]);

	return (
		<S.Container>
			<Header>
				<S.HeaderWhere>
					<S.HeaderBackBtn onClick={onBack} />
					<S.HeaderFloor>{Floor}</S.HeaderFloor>
				</S.HeaderWhere>
				<S.HeaderWhen>
					<S.HeaderMonthAndDay>{'7월 9일'}</S.HeaderMonthAndDay>
					<S.HeaderDayOfTheWeek>{'금요일'}</S.HeaderDayOfTheWeek>
				</S.HeaderWhen>
				<S.HeaderWho>{`감독교사 ${`김정은`}`}</S.HeaderWho>
			</Header>
			<Body></Body>
			<Footer />
		</S.Container>
	);
};

export default Attendancing;
