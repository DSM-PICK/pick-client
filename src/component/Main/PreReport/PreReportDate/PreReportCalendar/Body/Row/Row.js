import React from 'react';
import * as S from './styles';
import Item from './Item/Item';

const Row = (props) => {
	const { dateArr } = props;
	return (
		<S.Container>
			{dateArr.map(({ date, isActive, month }) => (
				<Item key={date} isActive={isActive} date={date} />
			))}
		</S.Container>
	);
};

export default Row;
