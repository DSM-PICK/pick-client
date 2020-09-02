import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
`;

export const DayHeader = styled.div`
	flex: 1;
	font-size: 16px;
	padding: 4px 0 6px 4px;

	&:nth-child(n) {
		border-right: 1px solid #c4c4c4;
	}
	&:nth-last-child() {
		border: none;
	}

	box-sizing: border-box;
`;
