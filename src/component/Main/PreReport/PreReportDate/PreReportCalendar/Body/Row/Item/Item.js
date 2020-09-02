import React from 'react';
import * as S from './styles';

const Item = (props) => {
	const now = new Date();
	const { isActive, date, today, month } = props;
	const isToday =
		date == today ? (now.getMonth() + 1 == month ? true : false) : false;

	return (
		<S.Container>
			<S.Date isActive={isActive} isToday={isToday}>
				{date}
			</S.Date>
		</S.Container>
	);
};

export default Item;
