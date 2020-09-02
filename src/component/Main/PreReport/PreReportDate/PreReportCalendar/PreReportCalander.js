import React, { useState } from 'react';
import * as S from './styles';
import Body from './Body/Body';
import Header from './Header/Header';
import getDateObj from '../../../../../lib/calander';

const PreReportCalander = () => {
	const date = new Date();
	const [year, setYear] = useState(date.getFullYear());
	const [month, setMonth] = useState(date.getMonth());
	const [today, setToday] = useState(date.getDate());
	const [calDate, setCalDate] = useState(getDateObj(year, month));

	const checkDate = () => {
		if (month < 0) {
			setYear(year - 1);
			setMonth(11);
		} else if (month > 11) {
			setYear(year + 1);
			setMonth(0);
		}
	};

	const prevMonth = () => {
		setMonth(month - 1);
		checkDate();
		setCalDate(getDateObj(year, month));
	};

	const nextMonth = () => {
		setMonth(month + 1);
		checkDate();
		setCalDate(getDateObj(year, month));
	};

	console.log(year, month, today, calDate);

	return (
		<S.Container>
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
