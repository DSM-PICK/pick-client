import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	width: 100%;
	height: 100%;
`;

export const AbsoluteBackground = styled.div`
	display: flex;
	position: fixed;
	width: 100vw;
	height: 100vw;
	background: rgba(38, 125, 255, 0.1);
	border-radius: 50%;
	align-self: center;
	justify-content: center;
`;

export const AbsoluteImg = styled.div`
	display: flex;
	position: absolute;
	width: 100vw;
	height: 50vw;
	background: ${(props) => props.imglink && `url(${props.imglink})`} no-repeat
		center/50% 70%;
`;

export const DownloadTag = styled.div`
	display: flex;
	position: absolute;
	top: 10vw;
	transform: translateY(-50%);
	width: 30vw;
	height: 30vh;
	min-width: 300px;
	min-height: 200px;
	border-radius: 20px;
	/* background: black; */
	background: rgba(255, 255, 255, 0.9);

	align-items: center;
	justify-content: center;

	flex-direction: column;
`;

export const DownloadImg = styled.div`
	display: flex;
	width: 300px;
	height: 150px;
	background: ${(props) => props.imglink && `url(${props.imglink})`} no-repeat
		center/50% 70%;
`;

export const DownloadBtn = styled.input`
	display: flex;
	width: 200px;
	height: 40px;
	font-size: 24px;
	color: #ffffff;
	background: #267dff;
	border: none;
	border-radius: 15px;
	justify-content: center;

	&:hover {
		cursor: pointer;
	}
`;
