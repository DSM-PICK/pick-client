import React from 'react';
import { Link } from 'react-router-dom';
import * as S from './styles';

const AdminNavItem = (props) => {
	return (
		<S.Container
			size={props.size}
			imglink={props.imgLink}
			to={props.link}
			as={Link}
		>
			{props.text}
		</S.Container>
	);
};

export default AdminNavItem;
