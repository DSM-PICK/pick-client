import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	width: 38vw;
	height: 68vh;
	min-width: 320px;
	min-height: 360px;
	background: ${(props) => props.bgcolor && props.bgcolor};
	border-radius: ${(props) =>
		props.position === 'left'
			? `60px 0 0 60px`
			: props.position === 'right'
			? `0 60px 60px 0`
			: 'none'};

	align-items: center;
	justify-content: center;
	flex-direction: column;
	box-sizing: border-box;
	box-shadow: 0px 6px 9px 0px rgba(0, 0, 0, 0.16);
`;
