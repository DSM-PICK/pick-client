import React from 'react';
import * as S from './styles';
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';
import Body from '../../Body/Body';

const onBack = () => {
	history.back();
};

const Attendancing = () => {
	return (
		<S.Container>
			<Header>
				<S.HeaderWhere>
					<S.HeaderBackBtn onClick={onBack} />
					<S.HeaderFloor>{`2층`}</S.HeaderFloor>
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
