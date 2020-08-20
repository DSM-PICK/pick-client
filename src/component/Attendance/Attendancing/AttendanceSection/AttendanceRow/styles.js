import styled from 'styled-components';

export const Containter = styled.div`
	display: flex;
	width: 100%;
	height: 80px;
	border-bottom: 1px solid #c4c4c4;
`;

export const SectionSpan = styled.span`
	display: flex;
	height: 100%;
	font-size: 28px;
	color: #20223e;
	align-items: center;
	justify-content: center;
`;

export const SectionSeq = styled(SectionSpan)`
	font-size: 24px;
	color: #707070;
	min-width: 54px;
`;

export const SectionStdNum = styled(SectionSpan)`
	min-width: 170px;
`;

export const SectionName = styled(SectionSpan)`
	min-width: 120px;
`;

export const SectionClassWrap = styled.div`
	display: flex;
	width: 100%;
	height: 100%;
	align-items: center;
`;

export const SectionClass = styled.div`
	display: flex;
	width: 100%;
	height: 100%;
	font-size: 22px;
	color: #707070;
	align-items: center;
	justify-content: center;
`;

export const SectionSelectClass = styled.select`
	display: flex;
	width: 80%;
	height: 50%;
	font-size: 22px;
	color: #707070;
	border: 1px solid #707070;
	border-radius: 20px;
	align-items: center;
	justify-content: center;
`;

export const SectionOptionClass = styled.option`
	display: flex;
`;
