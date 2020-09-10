import React from 'react';
import * as S from './styles';

const ExName = (props) => {
	const { name } = props;

	console.log(props, name);

	return <S.Container>{name.name}</S.Container>;
};

export default ExName;
