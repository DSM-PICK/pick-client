import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	height: 100%;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

export const Article = styled.div`
	display: flex;
	width: 100%;
	height: 80px;
	margin: 61px 0 53px 0;
	flex-direction: column;
	justify-content: space-around;
`;

export const Name = styled.div`
	text-align: center;
	font-size: 34px;
	font-weight: bold;
	color: #20223e;
`;

export const Location = styled.div`
	text-align: center;
	font-size: 28px;
	color: #707070;
`;

export const Head = styled.div`
	position: absolute;
	right: 100px;
	font-size: 28px;
`;

export const Attendance = styled.div`
	display: flex;
	width: 100%;
	height: 100%;
	background: skyblue;
`;
