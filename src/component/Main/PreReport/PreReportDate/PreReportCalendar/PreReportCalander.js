import React, { useState } from 'react';
import * as S from './styles';
import Body from './Body/Body';
import Header from './Header/Header';

const PreReportCalander = () => {
	const date = new Date();
	const [month, setMonth] = useState(date.getMonth() + 1);

	return (
		<S.Container>
			<S.Month>
				<S.MonthArrow />
				<S.MonthText>{month}월</S.MonthText>
				<S.MonthArrow />
			</S.Month>
			<Header />
			<Body />
		</S.Container>
	);
};

export default PreReportCalander;
