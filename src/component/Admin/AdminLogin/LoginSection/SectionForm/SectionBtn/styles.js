import styled from 'styled-components';

export const Container = styled.button`
	display: flex;
	margin: 25px 0;
	width: 300px;
	height: 64px;
	color: #ffffff;
	font-size: 24px;
	border: none;
	border-radius: 28px;
	background: #267dff;
	outline: none;
	box-shadow: 0px 6px 9px 0px rgba(0, 0, 0, 0.16);
	align-items: center;
	justify-content: center;
	flex-direction: column;

	&:hover {
		cursor: pointer;
	}
`;
