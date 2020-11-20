import React, { useCallback, useEffect } from "react";
import * as S from "./styles";
import { useDispatch, useSelector } from "react-redux";
import Header from "../Header/Header";
import Body from "../Body/Body";
import Footer from "../Footer/Footer";
import AttendanceBody from "../Attendance/body/AttendanceBody";
import LogoutModal from "../Modal/LogoutModal/LogoutModal";
import PreReport from "./PreReport/PreReports";
import Notice from "./Notice/Notice";
import { Logo } from "../../asset";
import { MAIN_ANCHOR_ITEMS } from "../Attendance/Constant";
import { getPreAbsenceListSaga } from "../../module/action/pre_absence";
import { getMainTextRemainingDateSaga } from "../../module/action/main_text";
import { checkPageWithLogin } from "../../lib/requestApi";
import { showModal } from "../../module/action/modal_wrap/index";

const Main = () => {
  useEffect(() => {
    checkPageWithLogin();
  }, []);

  const anchorItems = MAIN_ANCHOR_ITEMS;
  const TEACHER_NAME = `teacherName`;
  const dispatch = useDispatch();
  const remainingDate = useSelector(state => state.mainText.remainingDate);

  const teacherName = window.localStorage.getItem(TEACHER_NAME);

  const ShowLogoutModal = useCallback(() => {
    dispatch(showModal(LogoutModal));
  }, [dispatch]);

  useEffect(() => {
    checkPageWithLogin();
    dispatch(getPreAbsenceListSaga());
    dispatch(getMainTextRemainingDateSaga());
  }, []);

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
            <S.MainBodyLogoutButton onClick={ShowLogoutModal}>
              로그아웃
            </S.MainBodyLogoutButton>
          </S.MainBodyTopWho>
          <S.MainBodyTopWhen>
            <S.MainBodyTopWhenTime>{remainingDate[0]}</S.MainBodyTopWhenTime>
            {remainingDate[1]}
          </S.MainBodyTopWhen>
        </S.MainBodyTopText>

        <S.MainBodyBox>
          <S.MainBodyBoxText>출석하기</S.MainBodyBoxText>
          <AttendanceBody anchorItems={anchorItems} ismain={"main"} />
        </S.MainBodyBox>
        <S.MainBodyBox>
          <S.MainBodyBoxText>사전신고</S.MainBodyBoxText>
          <PreReport />
        </S.MainBodyBox>
        <S.MainBodyBox>
          <S.MainBodyBoxText>동아리현황</S.MainBodyBoxText>
          <Notice />
        </S.MainBodyBox>
      </Body>
      <Footer />
    </S.Container>
  );
};

export default Main;
