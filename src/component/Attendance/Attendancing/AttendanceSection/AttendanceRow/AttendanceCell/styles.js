import styled, { keyframes, css } from 'styled-components';

const size = keyframes`
	from{
		height: 260px;
	}
	to {
		height: 0px;
	}
`;

export const Container = styled.div`
	width: 80%;
	height: 50%;
	font-size: 26px;
	border: 1px solid #707070;
	border-radius: 20px;

	transition: all 0.3s ease-in-out;

	background: ${(props) => (props.state === true ? '#2764A7' : 'white')};
	color: ${(props) => (props.state === true ? 'white' : 'black')};
`;

export const Wrap = styled.div`
	position: relative;
	background: #2764a7;
	color: white;
	border: 1px solid #707070;
	border-radius: 20px;
	z-index: 1;
`;

export const Item = styled.div`
	display: flex;
	width: 100%;
	height: 40px;
	align-items: center;
	justify-content: center;
`;
