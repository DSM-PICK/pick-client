import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	width: 100%;
	height: 180px;
	margin: 10px 0;
	margin-top: ${(props) => (props.text === '4층' ? '50px' : '10px')};
	background: ${(props) =>
			props.url.length > 1 ? `url(${props.url})` : '#fafafa'}
		no-repeat center;
	box-shadow: 0 6px 9px 0 rgba(0, 0, 0, 0.16);
	font-size: 40px;
	text-decoration: none;
	color: ${(props) => (props.url.length > 1 ? 'white' : 'black')};
	line-height: 180px;
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
