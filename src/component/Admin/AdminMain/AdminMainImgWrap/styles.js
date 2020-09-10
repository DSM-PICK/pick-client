import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	width: 100%;
	height: 100%;
`;

export const Img = styled.div`
	display: flex;

	width: 200px;
	height: 200px;

	background: ${(props) => props.imglink && `url(${props.imglink})`} no-repeat;
`;
