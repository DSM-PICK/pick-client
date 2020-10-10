import styled from 'styled-components';

export const Container = styled.div`
	border-radius: 60px 60px 0 0;
	/* flex: 1; */
	height: 100%;
	background-color: #fafafa;
	box-sizing: border-box;
	display: flex;
	flex-direction: column;
`;

export const HeaderBackBtn = styled.div`
	display: flex;
	width: 3em;
	height: 3em;
	margin-right: 20px;
	align-items: center;
	justify-content: center;
	background: url('../../../src/asset/Header/back.png') no-repeat center/100%;
`;

export const HeaderFloor = styled.div`
	font-size: 38px;
	font-weight: bolder;
	position: absolute;
	margin-left: 80px;
`;
