import styled from 'styled-components';

export const Container = styled.div`
	position: absolute;
	display: flex;
	width: 500px;
	height: 515px;
	border: 1px solid #707070;
	background: white;
	flex-direction: column;
	z-index: 3;

	transform: ${(props) => props.height && `translateY(${props.height})`};
`;

export const Month = styled.div`
	display: flex;
	height: 68px;
	align-items: center;
	justify-content: space-around;
`;

export const MonthText = styled.div`
	display: flex;
	width: 60px;
	font-size: 24px;
	font-weight: bold;
	align-items: center;
	justify-content: center;
`;

export const MonthArrow = styled.div`
	display: flex;
	width: 20px;
	height: 20px;
	background: pink;
`;
