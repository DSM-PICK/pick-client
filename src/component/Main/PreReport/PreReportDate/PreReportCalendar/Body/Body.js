import React, { useState } from 'react';
import * as S from './styles';
import getDateObj from '../../../../../../lib/calander';
import Row from './Row/Row';

const Body = () => {
	const [date, setDate] = useState(getDateObj());
	return (
		<S.Container>
			{date.map((dateArr) => (
				<Row dateArr={dateArr} />
			))}
		</S.Container>
	);
};

export default Body;
