import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	width: 100%;
	height: 66px;
	margin-top: 80px;
	justify-content: center;

	font-size: 44px;
	font-weight: bold;

	background: ${(props) => props.imglink && `url(${props.imglink})`} no-repeat
		center;
`;
