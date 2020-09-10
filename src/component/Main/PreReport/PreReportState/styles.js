import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	width: 25%;
	font-size: 24px;
	align-items: center;
	justify-content: center;
	box-sizing: border-box;

	color: ${(props) =>
		props.stateName == props.preReportState ? 'white' : 'black'};
	background: ${(props) =>
		props.stateName == props.preReportState ? '#267dff' : 'white'};

	border-top: 1px solid #707070;
	border-bottom: 1px solid #707070;
`;
