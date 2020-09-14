import React from 'react';
import * as S from './styles';

const LoginSection = (props) => {
	const { bgcolor, position } = props;

	return (
		<S.Container bgcolor={bgcolor} position={position}>
			{props.children}
		</S.Container>
	);
};

export default LoginSection;
