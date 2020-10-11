import React from 'react';
import SectionInput from '../SectionInput';
import * as S from './styles';

const SectionInputID = () => {
	return (
		<S.Container>
			<SectionInput ph_text="아이디를 입력하세요" type="text" />
		</S.Container>
	);
};

export default SectionInputID;
