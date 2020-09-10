import React from 'react';
import * as S from './styles';

const AdminBodyTitle = (props) => {
	return <S.Container imglink={props.imglink}>{props.title}</S.Container>;
};

export default AdminBodyTitle;
