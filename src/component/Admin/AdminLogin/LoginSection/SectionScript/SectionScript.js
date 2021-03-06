import React from 'react';
import * as S from './styles';

const SectionScript = (props) => {
	const { color, text } = props;
	return <S.Container color={color}>{text}</S.Container>;
};

export default SectionScript;
