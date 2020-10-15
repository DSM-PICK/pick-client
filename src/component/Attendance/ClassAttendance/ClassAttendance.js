import React from "react";
import * as S from "../styles";
import AttendanceBody from "../body/AttendanceBody";
import Header from "../../Header/Header";
import { CLASS_ANCHOR_ITEMS } from "../Constant";
import Footer from "../../Footer/Footer";
import { Link } from "react-router-dom";
import { BackIcon } from "../../../asset";

const AttendanceClass = () => {
  const anchorItems = CLASS_ANCHOR_ITEMS;

  return (
    <S.Container>
      <Header>
        <S.HeaderBackBtn as={Link} to="/main" imglink={BackIcon} />
        <S.HeaderFloor>교실 자습</S.HeaderFloor>
      </Header>
      <AttendanceBody anchorItems={anchorItems} />
      <Footer />
    </S.Container>
  );
};

export default AttendanceClass;
