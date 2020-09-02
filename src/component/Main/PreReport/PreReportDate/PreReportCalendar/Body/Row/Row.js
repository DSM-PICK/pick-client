import React from 'react';
import * as S from './styles';
import Item from './Item/Item';

const Row = (props) => {
	const { dateArr, today, month } = props;

	return (
		<S.Container>
			{dateArr.map(({ date, isActive }) => (
				<Item
					key={date}
					isActive={isActive}
					date={date}
					today={today}
					month={month}
				/>
			))}
		</S.Container>
	);
};

export default Row;
