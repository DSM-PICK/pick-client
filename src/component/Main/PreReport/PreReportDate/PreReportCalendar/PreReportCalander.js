import React, { useState } from 'react';
import * as S from './styles';
import Body from './Body/Body';
import Header from './Header/Header';
import getDateObj from '../../../../../lib/calander';

const PreReportCalander = (props) => {
	const { height } = props;

	const date = new Date();

	const [year, setYear] = useState(date.getFullYear());
	const [month, setMonth] = useState(date.getMonth());
	const [today, setToday] = useState(date.getDate());
	const [calDate, setCalDate] = useState(getDateObj(year, month));

	const prevMonth = () => {
		if (month == 0) {
			setYear(year - 1);
			setMonth(11);
		} else {
			setMonth(month - 1);
		}
		setCalDate(getDateObj(year, month - 1));
	};

	const nextMonth = () => {
		if (month == 11) {
			setYear(year + 1);
			setMonth(0);
		} else {
			setMonth(month + 1);
		}
		setCalDate(getDateObj(year, month + 1));
	};

	return (
		<S.Container height={height}>
			<S.Month>
				<S.MonthArrow onClick={prevMonth} />
				<S.MonthText>{month + 1}월</S.MonthText>
				<S.MonthArrow onClick={nextMonth} />
			</S.Month>
			<Header />
			<Body calDate={calDate} today={today} month={month + 1} />
		</S.Container>
	);
};

export default PreReportCalander;
