import React from 'react';
import * as S from './styles';
import LoginSection from '../LoginSection';
import SectionHeader from '../SectionHeader/SectionHeader';
import SectionLine from '../SectionLine/SectionLine';
import SectionScript from '../SectionScript/SectionScript';

const LeftLoginSection = () => {
	return (
		<S.Container>
			<LoginSection bgcolor="#267dff" position="left">
				<SectionHeader color="#ffffff" text="PICK 어드민 페이지" />
				<SectionLine bgcolor="#ffffff" size="big" />
				<SectionScript
					color="#ffffff"
					text="PICK is Attendance Manager for DSM."
				/>
			</LoginSection>
		</S.Container>
	);
};

export default LeftLoginSection;
