import React from 'react';
import * as S from './styles';
import Item from './Item/Item';

const Row = (props) => {
	const { dateArr, month } = props;
	const { onOffModal, onSelectDay } = props;

	return (
		<S.Container>
			{dateArr.map(({ date, isActive }) => (
				<Item
					key={date}
					isActive={isActive}
					date={date}
					month={month}
					onOffModal={onOffModal}
					onSelectDay={onSelectDay}
				/>
			))}
		</S.Container>
	);
};

export default Row;
