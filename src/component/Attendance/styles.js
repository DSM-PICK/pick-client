import styled from 'styled-components';

export const Container = styled.div`
	border-radius: 60px 60px 0 0;
	flex: 1;
	background-color: #fafafa;
	box-sizing: border-box;
	display: flex;
	flex-direction: column;
`;

export const HeaderBackBtn = styled.span`
	position: absolute;
	left: 30px;
	top: 30px;

	& > svg {
		width: 3em;
		height: 3em;
		vertical-align: middle;
	}
`;

export const HeaderText = styled.span`
	position: absolute;
	left: 100px;
	top: 30px;
	font-size: 38px;
	font-weight: bold;
	vertical-align: middle;
`;
