import React from 'react';
import * as S from './styles';
import LoginSection from '../LoginSection';
import SectionForm from '../SectionForm/SectionForm';
import SectionHeader from '../SectionHeader/SectionHeader';
import SectionLine from '../SectionLine/SectionLine';

const RightLoginSection = () => {
	return (
		<S.Container>
			<LoginSection bgcolor="#ffffff" position="right">
				<SectionHeader color="#000000" text="로그인" />
				<SectionLine bgcolor="#267dff" />
				<SectionForm />
			</LoginSection>
		</S.Container>
	);
};

export default RightLoginSection;
