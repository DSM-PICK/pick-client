import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	width: 23vw;
	height: 23vw;
	min-width: 150px;
	min-height: 150px;
	padding: 10px;
	color: #000000;
	text-decoration: none;
	background: #ffffff;
	border-radius: 20px;

	align-items: center;
	flex-direction: column;

	box-sizing: border-box;
	box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.16);

	transition: all 0.3s;

	&:hover {
		width: 25vw;
		height: 25vw;
	}
`;

export const ItemTitle = styled.div`
	display: flex;
	width: 100%;

	margin: 10px 0;

	font-size: 28px;
	font-weight: bold;

	justify-content: center;
`;

export const ItemText = styled.div`
	display: flex;
	width: 90%;

	margin: 10px 0;

	font-size: 22px;

	justify-content: center;
`;

export const ItemImg = styled.div`
	display: flex;
	width: 90%;
	height: 100%;
	background: ${(props) =>
		props.imglink && `url(${props.imglink}) no-repeat center/90%`};
`;
