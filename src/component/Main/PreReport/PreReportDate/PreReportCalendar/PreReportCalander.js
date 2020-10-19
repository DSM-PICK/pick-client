import React from "react";
import * as S from "./styles";
import Body from "./Body/Body";
import Header from "./Header/Header";

const PreReportCalander = props => {
  const { height, calcDate, calcMonth } = props;
  const { onOffModal, onSelectDay, onClickCalcMonth } = props;

  return (
    <S.Container height={height}>
      <S.Month>
        <S.MonthArrow isLeft={true} onClick={() => onClickCalcMonth(true)} />
        <S.MonthText>{calcMonth + 1}월</S.MonthText>
        <S.MonthArrow isLeft={false} onClick={() => onClickCalcMonth(false)} />
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
