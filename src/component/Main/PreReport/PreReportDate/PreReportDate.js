import React from 'react';
import * as S from './styles';

const PreReportDate = () => {
	return (
		<S.Container>
			<S.Date>
				<S.Month>월</S.Month>
				<S.Day>일</S.Day>
				<S.Class>교시</S.Class>
				<S.Additional>~</S.Additional>
			</S.Date>
			<S.Date>
				<S.Month month={1}>월</S.Month>
				<S.Day day={2}>일</S.Day>
				<S.Class classValue={3}>교시</S.Class>
			</S.Date>
		</S.Container>
	);
};

export default PreReportDate;
