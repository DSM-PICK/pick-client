import React from "react";
import { useSelector } from "react-redux";
import { CalendarModalLeft, CalendarModalRight } from "../../../asset";
import Modal from "../Modal";
import Body from "./Body/Body";
import Header from "./Header/Header";
import * as S from "./styles";

const CalendarModal = () => {
  const preReportData = useSelector(state => state.preReport);
  const { utils, calcDate, calc } = preReportData;
  const { year, month } = calc;

  const onSelectDay = utils[0];
  const onClickCalcMonth = utils[1];

  const MODAL_CSS = {
    width: "500px",
    background: "#ffffff"
  };

  return (
    <Modal css={MODAL_CSS}>
      <S.Month>
        <S.MonthArrow
          src={CalendarModalLeft}
          onClick={() => onClickCalcMonth(year, month, true)}
        />
        <S.MonthText>{month + 1}월</S.MonthText>
        <S.MonthArrow
          src={CalendarModalRight}
          onClick={() => onClickCalcMonth(year, month, false)}
        />
      </S.Month>
      <Header />
      <Body calcDate={calcDate} onSelectDay={onSelectDay} />
    </Modal>
  );
};

export default CalendarModal;
