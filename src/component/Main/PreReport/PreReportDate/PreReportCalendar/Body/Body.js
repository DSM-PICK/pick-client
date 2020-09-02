import React, { useState } from 'react';
import * as S from './styles';
import getDateObj from '../../../../../../lib/calander';
import Row from './Row/Row';

const Body = (props) => {
	const { calDate, today, month } = props;

	return (
		<S.Container>
			{calDate.map((dateArr) => (
				<Row
					key={dateArr[0][0]}
					dateArr={dateArr}
					today={today}
					month={month}
				/>
			))}
		</S.Container>
	);
};

export default Body;
