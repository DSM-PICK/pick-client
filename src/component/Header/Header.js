import React from 'react';
import * as S from './styles';

const Header = (props) => {
	return <S.Container>{props.children}</S.Container>;
};

export default Header;
