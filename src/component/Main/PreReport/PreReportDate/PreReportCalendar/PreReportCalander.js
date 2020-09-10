import React, { useState } from 'react';
import * as S from './styles';
import Body from './Body/Body';
import Header from './Header/Header';
import getDateObj from '../../../../../lib/calander';

const PreReportCalander = (props) => {
	const { height, calcDate, calcMonth } = props;
	const { onOffModal, onSelectDay, prevCalcMonth, nextCalcMonth } = props;

	return (
		<S.Container height={height}>
			<S.Month>
				<S.MonthArrow onClick={prevCalcMonth} />
				<S.MonthText>{calcMonth + 1}월</S.MonthText>
				<S.MonthArrow onClick={nextCalcMonth} />
			</S.Month>
			<Header />
			<Body
				month={calcMonth + 1}
				calcDate={calcDate}
				onOffModal={onOffModal}
				onSelectDay={onSelectDay}
			/>
		</S.Container>
	);
};

export default PreReportCalander;
