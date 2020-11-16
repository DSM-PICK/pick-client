import React from "react";
import * as S from "./styles";
import Body from "./Body/Body";
import Header from "./Header/Header";
import {
  CalendarModalLeft,
  CalendarModalRight
} from "../../../../../asset/index";
import { isBrowser } from "react-device-detect";

const PreReportCalander = props => {
  const { height, calcDate, calcMonth } = props;
  const { onOffModal, onSelectDay, onClickCalcMonth } = props;

  const margin = isBrowser ? "5% 0 0 50%" : "50% 0 0 50%";
  return (
    <S.Container margin={margin}>
      <S.Month>
        <S.MonthArrow
          src={CalendarModalLeft}
          onClick={() => onClickCalcMonth(true)}
        />
        <S.MonthText>{calcMonth + 1}월</S.MonthText>
        <S.MonthArrow
          src={CalendarModalRight}
          onClick={() => onClickCalcMonth(false)}
        />
      </S.Month>
      <Header />
      <Body
        calcDate={calcDate}
        onOffModal={onOffModal}
        onSelectDay={onSelectDay}
      />
    </S.Container>
  );
};

export default PreReportCalander;
