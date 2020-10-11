import React from 'react';
import * as S from './styles';

const SectionInput = (props) => {
	const { type, ph_text, minus_width } = props;

	return (
		<S.Container placeholder={ph_text} minus_width={minus_width} type={type} />
	);
};

export default SectionInput;
