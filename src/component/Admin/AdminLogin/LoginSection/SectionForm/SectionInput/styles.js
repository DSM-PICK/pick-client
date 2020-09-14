import styled from 'styled-components';

export const Container = styled.input`
	display: flex;
	padding: 5px 0 5px 0px;
	width: ${(props) =>
		props.minus_width ? `calc(25vw - ${props.minus_width}px)` : `25vw`};
	min-width: ${(props) =>
		props.minus_width ? 300 - props.minus_width : 300}px;
	border: none;
	color: #000000;
	font-size: 20px;
	outline: none;

	&::placeholder {
		color: #c4c4c4;
		padding-left: 10px;
	}
`;
