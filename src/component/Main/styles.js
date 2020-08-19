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
	display: flex;
	height: 120px;
	margin-top: 62px;
	color: #20223e;
	font-size: 50px;
	font-weight: bold;
	text-align: center;
	align-items: center;
	justify-content: space-around;
	flex-direction: column;
`;

export const MainBodyTopWho = styled.div``;
export const MainBodyTopWhen = styled.div``;
export const MainBodyTopWhoName = styled.span``;
export const MainBodyTopWhenTime = styled.span`
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
	color: #20223e;
	padding: 10px 0 20px 0;

	& > div {
		display: flex;
		border: none;
		padding: 20px 0;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
	}

	& > div > a {
		width: 49%;
	}
`;

export const MainBodyBoxText = styled.p`
	height: 34px;
	margin-left: 30px;
	font-size: 32px;
	font-weight: bold;
`;

export const MainBodyBoxSection = styled.div`
	display: flex;
	width: 100%;
	height: 300px;
	margin: 10px 0;
	border-radius: 60px;
	box-shadow: 0 6px 9px 0 rgba(0, 0, 0, 0.16);
`;

export const MainBodyLogoutLayout = styled.div`
	position: absolute;
	display: flex;
	height: 74px;
	left: 50%;
	transform: translateX(-50%);
	bottom: 146px;
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
