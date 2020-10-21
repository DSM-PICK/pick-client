import React, { useCallback, useEffect, useState } from "react";
import * as S from "./styles";
import { useDispatch, useSelector } from "react-redux";
import Header from "../Header/Header";
import Body from "../Body/Body";
import Footer from "../Footer/Footer";
import AttendanceBody from "../Attendance/body/AttendanceBody";
import LogoutModal from "./Modal/LogoutModal";
import PreReport from "./PreReport/PreReports";
import Notice from "./Notice/Notice";
import { Logo } from "../../asset";
import { MAIN_ANCHOR_ITEMS } from "../Attendance/Constant";
import { modalOn, modalOff } from "../../module/action/admin_modal";
import { getPreAbsenceListSaga } from "../../module/action/pre_absence";
import { getMainTextRemainingDateSaga } from "../../module/action/main_text";
import { getNoticeListSaga } from "../../module/action/notice";
import { checkPageWithLogin } from "../../lib/requestApi";

const getRemainTime = remainingDate => {
  const date = new Date();
  let [hour, minute] = remainingDate === "오늘" ? [20, 30] : [16, 30];
  if (date.getDay() === 0 || date.getDay() === 6) {
    return `주말`;
  }
  hour -= date.getHours();
  minute -= date.getMinutes();
  if (hour < 0 || (hour == 0 && minute == 0)) {
    return `퇴근`;
  }

  if (minute < 0) {
    hour -= 1;
    minute += 60;
  }

  let text = !!hour ? `${hour}시간 ${minute}분` : `${minute}분`;

  return text;
};

const Main = () => {
  const anchorItems = MAIN_ANCHOR_ITEMS;
  const dispatch = useDispatch();
  const isOpen = useSelector(state => state.adminModal.modalOn);
  const mainText = useSelector(state => state.mainText.mainText);
  const remainingDate = useSelector(state => state.mainText.remainingDate);

  const [text, setText] = useState(getRemainTime(remainingDate));
  const modalOpen = useCallback(() => dispatch(modalOn()), [dispatch]);
  const modalClose = useCallback(() => dispatch(modalOff()), [dispatch]);

  const onModalClick = () => {
    const modalDoing = isOpen ? modalClose : modalOpen;
    modalDoing();
  };

  const TEXT_ARR = [
    ["오늘은 ", "입니다! "],
    ["지금은 ", "시간입니다!"],
    ["퇴근까지 ", " 남았습니다!"]
  ];

  useEffect(() => {
    setInterval(() => {
      setText(getRemainTime(remainingDate));
    }, 1000);
    checkPageWithLogin();
    dispatch(getPreAbsenceListSaga());
    dispatch(getMainTextRemainingDateSaga());
  }, []);

  const TEACHER_NAME = `teacherName`;
  const teacherName = window.localStorage.getItem(TEACHER_NAME);

  return (
    <S.Container>
      <Header>
        <S.MainHeader>
          <S.MainHeaderLogo url={Logo} />
        </S.MainHeader>
      </Header>
      <Body>
        <S.MainBodyTopText>
          <S.MainBodyTopWho>
            {teacherName} 선생님은
            <S.MainBodyLogoutButton onClick={onModalClick}>
              로그아웃
            </S.MainBodyLogoutButton>
          </S.MainBodyTopWho>
          <S.MainBodyTopWhen>
            <S.MainBodyTopWhenTime>{`${remainingDate} 저녁 `}</S.MainBodyTopWhenTime>
            자습감독이십니다.
          </S.MainBodyTopWhen>
        </S.MainBodyTopText>

        <S.MainBodyOffwork>
          {text === "주말"
            ? TEXT_ARR[0][0]
            : text === "퇴근"
            ? TEXT_ARR[1][0]
            : TEXT_ARR[2][0]}
          <S.MainBodyOffworkWhen>{text}</S.MainBodyOffworkWhen>
          {text === "주말"
            ? TEXT_ARR[0][1]
            : text === "퇴근"
            ? TEXT_ARR[1][1]
            : TEXT_ARR[2][1]}
        </S.MainBodyOffwork>
        <S.MainBodyBox>
          <S.MainBodyBoxText>출석하기</S.MainBodyBoxText>
          <AttendanceBody anchorItems={anchorItems} ismain={"main"} />
        </S.MainBodyBox>
        <S.MainBodyBox>
          <S.MainBodyBoxText>사전결석신고</S.MainBodyBoxText>
          <PreReport />
        </S.MainBodyBox>
        <S.MainBodyBox>
          <S.MainBodyBoxText>동아리 현황</S.MainBodyBoxText>
          <Notice />
        </S.MainBodyBox>
        {isOpen && <LogoutModal onModalClick={onModalClick} />}
      </Body>
      <Footer />
    </S.Container>
  );
};

export default Main;
