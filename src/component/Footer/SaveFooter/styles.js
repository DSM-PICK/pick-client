import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	width: 100%;
	height: 100px;
	background: #2764a7;
	position: fixed;
	bottom: 0;

	font-size: 38px;
	font-weight: bold;
	color: white;
	align-items: center;
	justify-content: center;
`;

export const Animation = styled.div`
	position: absolute;
	display: flex;
	/* display: ${(props) => (props.saveAni ? 'flex' : 'none')}; */
	bottom: 150px;
	left: 50%;
	transform: translateX(-50%);
	width: 236px;
	height: 48px;
	background: #2764a7;
	border-radius: 48px;
	font-size: 26px;
	color: white;
	align-items: center;
	justify-content: center;
	opacity: ${(props) => (props.saveAni ? 1 : 0)};

	transition: all 0.3s ease-in-out;
`;
