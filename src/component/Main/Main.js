import React, { useCallback, useState } from "react";
import * as G from "../../GlobalStyle";
import * as S from "./styles";
import Header from "../Header/Header";
import Body from "../Body/Body";
import Footer from "../Footer/Footer";
import AttendanceBody from "../Attendance/body/AttendanceBody";
import { MAIN_ANCHOR_ITEMS } from "../Attendance/Constant";
import LogoutModal from "./Modal/LogoutModal";
import PreReport from "./PreReport/PreReport";
import { useDispatch, useSelector } from "react-redux";
import { modalOn, modalOff } from "../../module/action/admin_modal";
import { Logo } from "../../asset";

const Main = () => {
  const anchorItems = MAIN_ANCHOR_ITEMS;
  const dispatch = useDispatch();
  const isOpen = useSelector(state => state.adminModal.modalOn);
  const mainText = useSelector(state => state.mainText.mainText);
  const preAbsence = useSelector(state => state.preAbsence.preAbsence);

  const modalOpen = useCallback(() => dispatch(modalOn()), [dispatch]);
  const modalClose = useCallback(() => dispatch(modalOff()), [dispatch]);

  const onModalClick = () => {
    const modalDoing = isOpen ? modalClose : modalOpen;
    modalDoing();
  };

  return (
    <G.GlobalContainer>
      <Header>
        <S.MainHeader>
          <S.MainHeaderLogo url={Logo} />
        </S.MainHeader>
      </Header>
      <Body>
        <S.MainBodyTopText>
          <S.MainBodyTopWho>{"김정은"} 선생님은</S.MainBodyTopWho>
          <S.MainBodyTopWhen>
            <S.MainBodyTopWhenTime>{"오늘 저녁 "}</S.MainBodyTopWhenTime>
            자습감독 이십니다.
          </S.MainBodyTopWhen>
        </S.MainBodyTopText>
        <S.MainBodyLogoutLayout>
          <S.MainBodyLogoutButton onClick={onModalClick}>
            로그아웃
          </S.MainBodyLogoutButton>
        </S.MainBodyLogoutLayout>
        <S.MainBodyOffwork>
          힘내세요! 퇴근까지
          <S.MainBodyOffworkWhen>{" 2시간 38분"}</S.MainBodyOffworkWhen>{" "}
          남았습니다.
        </S.MainBodyOffwork>
        <S.MainBodyBox>
          <S.MainBodyBoxText>출석하기</S.MainBodyBoxText>
          <AttendanceBody anchorItems={anchorItems} />
        </S.MainBodyBox>
        <S.MainBodyBox>
          <S.MainBodyBoxText>사전결석신고</S.MainBodyBoxText>
          <PreReport />
        </S.MainBodyBox>
        {isOpen && <LogoutModal onModalClick={onModalClick} />}
      </Body>
      <Footer />
    </G.GlobalContainer>
  );
};

export default Main;
