import React from 'react';
import * as S from './styles';

const Item = (props) => {
	const { isActive, date } = props;

	return <S.Container isActive={isActive}>{date}</S.Container>;
};

export default Item;
