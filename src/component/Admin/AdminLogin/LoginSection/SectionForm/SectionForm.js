import React from 'react';
import SectionBtn from './SectionBtn/SectionBtn';
import SectionInputID from './SectionInput/SectionInputID/SectionInputID';
import SectionInputPW from './SectionInput/SectionInputPW/SectionInputPW';
import * as S from './styles';

const SectionForm = () => {
	return (
		<S.Container>
			<SectionInputID />
			<SectionInputPW />
			<SectionBtn />
		</S.Container>
	);
};

export default SectionForm;
