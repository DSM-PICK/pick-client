import React from 'react';
import * as S from './styles';
import { Link } from 'react-router-dom';

const AdminClubItem = (props) => {
	const { url, title, text, imglink } = props;
	return (
		<S.Container as={Link} to={url}>
			<S.ItemTitle>{title}</S.ItemTitle>
			<S.ItemText>{text}</S.ItemText>
			<S.ItemImg imglink={imglink} />
		</S.Container>
	);
};

export default AdminClubItem;
