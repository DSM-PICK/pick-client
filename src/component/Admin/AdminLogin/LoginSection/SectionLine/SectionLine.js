import React from 'react';
import * as S from './styles';

const SectionLine = (props) => {
	const { bgcolor, size } = props;
	return <S.Container bgcolor={bgcolor} size={size}></S.Container>;
};

export default SectionLine;
