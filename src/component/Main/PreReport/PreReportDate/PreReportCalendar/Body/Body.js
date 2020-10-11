import React, { useState } from 'react';
import * as S from './styles';
import getDateObj from '../../../../../../lib/calander';
import Row from './Row/Row';

const Body = (props) => {
	const { calcDate, month } = props;
	const { onOffModal, onSelectDay } = props;

	return (
		<S.Container>
			{calcDate.map((dateArr) => (
				<Row
					key={dateArr[0][0]}
					dateArr={dateArr}
					month={month}
					onOffModal={onOffModal}
					onSelectDay={onSelectDay}
				/>
			))}
		</S.Container>
	);
};

export default Body;
