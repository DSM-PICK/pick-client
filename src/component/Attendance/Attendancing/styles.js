import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	height: 100%;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

export const HeaderWhere = styled.div`
	display: flex;
`;

export const HeaderBackBtn = styled.div`
	width: 3em;
	height: 3em;
	margin-right: 20px;
	background: black;
`;

export const HeaderFloor = styled.div`
	font-size: 38px;
	font-weight: bolder;
`;

export const HeaderWhen = styled.div`
	display: flex;
	flex-direction: column;
`;

export const HeaderMonthAndDay = styled.p`
	text-align: center;
	font-size: 30px;
	font-weight: bold;
`;

export const HeaderDayOfTheWeek = styled.p`
	text-align: center;
	font-size: 18px;
`;

export const HeaderWho = styled.div`
	font-size: 30px;
	font-weight: bold;
`;
