import styled from 'styled-components';

export const Containter = styled.div`
	display: flex;
	width: 100%;
	height: 48px;
	margin-top: 40px;
	border-bottom: 1px solid #c4c4c4;
`;

export const SectionSpan = styled.span`
	display: inline-block;
	height: 100%;
	font-size: 22px;
	color: #707070;
	text-align: center;
	align-items: center;
	justify-content: center;
`;

export const SectionSeq = styled(SectionSpan)`
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
`;

export const SectionClass = styled.div`
	display: flex;
	width: 100%;
	height: 100%;
	font-size: 22px;
	color: #707070;
	justify-content: center;
`;
