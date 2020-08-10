import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	width: 100%;
	height: 238px;
	margin: 10px 0;
	background: url(${(props) => props.url}) no-repeat center;
	font-size: 40px;
	text-decoration: none;
	color: white;
	line-height: 238px;
	text-align: center;
	border-radius: 60px;
	flex-direction: column;
	box-sizing: border-box;

	&::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		z-index: -1;
		filter: blur(2.5px);
	}
`;
