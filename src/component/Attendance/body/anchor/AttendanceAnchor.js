import React from 'react';
import * as S from './styles';
import { Link } from 'react-router-dom';

const AttendanceBody = (props) => {
	const { text, link, imgLink } = props;

	return (
		<S.Container as={Link} to={link} url={imgLink}>
			{text}
		</S.Container>
	);
};

export default AttendanceBody;
