import React from 'react';
import * as G from '../../GlobalStyle';
import * as S from './styles';
import Header from '../Header/Header';
import Body from '../Body/Body';
import Footer from '../Footer/Footer';
import AttendanceBody from '../Attendance/body/AttendanceBody';
import { MAIN_ANCHOR_ITEMS } from '../Attendance/Constant';

const Main = () => {
	const anchorItems = MAIN_ANCHOR_ITEMS;

	return (
		<G.GlobalContainer>
			<Header>
				<S.MainHeader>
					<S.MainHeaderLogo />
				</S.MainHeader>
			</Header>
			<Body>
				<S.MainBodyTopText>
					<S.MainBodyTopWho>{'김정은'} 선생님은</S.MainBodyTopWho>
					<S.MainBodyTopWhen>
						<S.MainBodyTopWhenTime>{'오늘 저녁 '}</S.MainBodyTopWhenTime>
						자습감독 이십니다.
					</S.MainBodyTopWhen>
				</S.MainBodyTopText>
				<S.MainBodyOffwork>
					힘내세요! 퇴근까지
					<S.MainBodyOffworkWhen>{' 2시간 38분'}</S.MainBodyOffworkWhen>{' '}
					남았습니다.
				</S.MainBodyOffwork>
				<S.MainBodyBox>
					<S.MainBodyBoxText>출석하기</S.MainBodyBoxText>
					<AttendanceBody anchorItems={anchorItems} />
				</S.MainBodyBox>
				<S.MainBodyBox>
					<S.MainBodyBoxText>사전결석신고</S.MainBodyBoxText>
					<S.MainBodyBoxSection></S.MainBodyBoxSection>
				</S.MainBodyBox>
				<S.MainBodyLogoutLayout>
					<S.MainBodyLogoutButton>로그아웃</S.MainBodyLogoutButton>
				</S.MainBodyLogoutLayout>
			</Body>
			<Footer />
		</G.GlobalContainer>
	);
};

export default Main;
