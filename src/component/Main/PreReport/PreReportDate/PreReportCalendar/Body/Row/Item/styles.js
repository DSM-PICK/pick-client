import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	flex: 1;
	padding: 4px 0 0 4px;

	color: ${(props) => (props.isActive ? 'black' : '#c4c4c4')};
	font-size: 18px;
	font-weight: bold;

	&:nth-child(n) {
		border-right: 1px solid #c4c4c4;
	}
	&:nth-last-child() {
		border: none;
	}
`;
