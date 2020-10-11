import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	width: 100%;
	height: calc(100% - 50px);

	margin: 50px 0;

	justify-content: space-evenly;

	& > div:nth-child(2n) {
		align-self: flex-end;
	}
`;

export const Img = styled.div`
	display: flex;

	width: 15vw;
	height: 15vw;

	background: ${(props) => props.imglink && `url(${props.imglink})`} no-repeat
		center/100%;
`;
