import React from "react";
import * as S from "./styles";
import PreReportCalander from "./PreReportCalendar/PreReportCalander";
import PreReportModal from "./PreReportModal/PreReportModal";

const PreReportDate = props => {
  const {
    modal,
    height,
    calcDate,
    calcMonth,
    calcYear,
    preDate,
    nextDate,
    preClassInput,
    nextClassInput
  } = props;
  const {
    onOffModal,
    onPreClick,
    onNextClick,
    prevCalcMonth,
    nextCalcMonth,
    onSelectDay,
    onPreClassChange,
    onNextClassChange
  } = props;

  return (
    <S.Container>
      <S.Date>
        <S.Month month={preDate.month} onClick={onPreClick}>
          월
        </S.Month>
        <S.Day day={preDate.day} onClick={onPreClick}>
          일
        </S.Day>
        <S.ClassWrap>
          <S.Class
            type="number"
            min="1"
            max="10"
            placeholder="__"
            ref={preClassInput}
            value={preDate.period}
            onChange={onPreClassChange}
          />
          <S.ClassText>교시</S.ClassText>
          <S.Additional>~</S.Additional>
        </S.ClassWrap>
      </S.Date>
      <S.Date>
        <S.Month month={nextDate.month} onClick={onNextClick}>
          월
        </S.Month>
        <S.Day day={nextDate.day} onClick={onNextClick}>
          일
        </S.Day>
        <S.ClassWrap>
          <S.Class
            type="number"
            min="1"
            max="10"
            placeholder="__"
            ref={nextClassInput}
            value={nextDate.period}
            onChange={onNextClassChange}
          />
          <S.ClassText>교시</S.ClassText>
        </S.ClassWrap>
      </S.Date>
      {modal && (
        <PreReportCalander
          height={height}
          calcDate={calcDate}
          calcMonth={calcMonth}
          calcYear={calcYear}
          onOffModal={onOffModal}
          onSelectDay={onSelectDay}
          prevCalcMonth={prevCalcMonth}
          nextCalcMonth={nextCalcMonth}
        />
      )}
      {modal && <PreReportModal onOffModal={onOffModal} />}
    </S.Container>
  );
};

export default PreReportDate;
