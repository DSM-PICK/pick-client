import React from 'react';
import * as S from './styles';

const AttedanceHeader = (props) => {
	const { text } = props;
	return <S.Container>{text}</S.Container>;
};

export default AttedanceHeader;
