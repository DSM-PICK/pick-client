import React, { useState } from 'react';
import * as S from './styles';
import PreReportCalander from './PreReportCalendar/PreReportCalander';

const PreReportDate = () => {
	const [preMonth, setPreMonth] = useState('');
	const [preDay, setPreMDay] = useState('');
	const [preClassValue, setPreClassValue] = useState('');
	const [nextMonth, setNextMonth] = useState('');
	const [nextDay, setNextDay] = useState('');
	const [nextClassValue, setNextClassValue] = useState('');

	const onPreClick = () => {};

	const onNextClick = () => {};

	return (
		<S.Container>
			<S.Date onClick={onPreClick}>
				<S.Month month={preMonth}>월</S.Month>
				<S.Day day={preDay}>일</S.Day>
				<S.Class classValue={preClassValue}>교시</S.Class>
				<S.Additional>~</S.Additional>
			</S.Date>
			<S.Date onClick={onNextClick}>
				<S.Month month={nextMonth}>월</S.Month>
				<S.Day day={nextDay}>일</S.Day>
				<S.Class classValue={nextClassValue}>교시</S.Class>
			</S.Date>
			<PreReportCalander />
		</S.Container>
	);
};

export default PreReportDate;
