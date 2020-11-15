import React from "react";
import * as S from "../styles";
import AttendanceBody from "../body/AttendanceBody";
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";
import { Link } from "react-router-dom";
import { BackIcon } from "../../../asset";
import { TABLET_MAIN } from "../../../lib/constant";
import { getLocationState } from "../../../lib/attendanceApi";
import { CLUB_ANCHOR_ITEMS, SELF_STUDY_ANCHOR_ITEMS } from "../Constant";

const SelectAttendance = () => {
  const location = getLocationState();

  const floorText = location === "club" ? "전공동아리" : "자율학습";
  const anchorItems =
    location === "club" ? CLUB_ANCHOR_ITEMS : SELF_STUDY_ANCHOR_ITEMS;

  return (
    <S.Container>
      <Header>
        <S.HeaderWrap>
          <S.HeaderBackBtn as={Link} to={TABLET_MAIN} imglink={BackIcon} />
          <S.HeaderFloor>{floorText}</S.HeaderFloor>
        </S.HeaderWrap>
      </Header>
      <AttendanceBody anchorItems={anchorItems} />
      <Footer />
    </S.Container>
  );
};

export default SelectAttendance;
