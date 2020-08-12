import styled from 'styled-components';

export const MainHeader = styled.div`
	display: flex;
	width: 100%;
	height: 100%;
	align-items: center;
	justify-content: center;
`;

export const MainHeaderLogo = styled.div`
	width: 500px;
	height: 60px;
	background: pink;
`;

export const MainBodyTopText = styled.div`
	height: 120px;
	margin-top: 12px;
	font-size: 50px;
	font-weight: bold;
	text-align: center;
`;

export const MainBodyTopWho = styled.span``;

export const MainBodyTopWhen = styled.span`
	color: #2764a7;
`;

export const MainBodyOffwork = styled.div`
	height: 30px;
	margin: 32px 0 60px 0;
	font-size: 28px;
	text-align: center;
`;

export const MainBodyOffworkWhen = styled.span`
	color: #2764a7;
`;

export const MainBodyBox = styled.div`
	position: relative;
	width: 100%;
	height: 300px;

	& > div {
		display: flex;
		padding: 0;
		border: none;
		flex-direction: row;
		align-items: center;
		justify-content: space-around;
	}

	& > div > a {
		width: 45%;
	}
`;

export const MainBodyBoxText = styled.p`
	height: 34px;
	margin-left: 30px;
	font-size: 32px;
	font-weight: bold;
`;

export const MainBodyLogoutLayout = styled.div`
	display: flex;
	width: 100%;
	height: 74px;
	margin-top: auto;
	align-items: center;
	justify-content: center;
`;

export const MainBodyLogoutButton = styled.button`
	width: 286px;
	height: 74px;
	background: #2764a7;
	font-size: 40px;
	font-weight: bold;
	color: white;
	border: 1px solid #707070;
	border-radius: 30px;
`;
