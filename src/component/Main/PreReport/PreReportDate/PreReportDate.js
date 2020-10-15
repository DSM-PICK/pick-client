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
    preMonth,
    nextMonth,
    preDay,
    nextDay,
    preClassValue,
    nextClassValue,
    preClassInput,
    nextClassInput
  } = props;
  const {
    onOffModal,
    onPreClick,
    onNextClick,
    onPreSelect,
    onNextSelect,
    prevCalcMonth,
    nextCalcMonth,
    onSelectDay,
    onPreClassChange,
    onNextClassChange
  } = props;

  return (
    <S.Container>
      <S.Date>
        <S.Month month={preMonth} onClick={onPreClick}>
          월
        </S.Month>
        <S.Day day={preDay} onClick={onPreClick}>
          일
        </S.Day>
        <S.Class
          type="number"
          min="1"
          max="10"
          placeholder="__"
          ref={preClassInput}
          value={preClassValue}
          onChange={onPreClassChange}
        />
        <S.ClassText>교시</S.ClassText>
        <S.Additional>~</S.Additional>
      </S.Date>
      <S.Date>
        <S.Month month={nextMonth} onClick={onNextClick}>
          월
        </S.Month>
        <S.Day day={nextDay} onClick={onNextClick}>
          일
        </S.Day>
        <S.Class
          type="number"
          min="1"
          max="10"
          placeholder="__"
          ref={nextClassInput}
          value={nextClassValue}
          onChange={onNextClassChange}
        />
        <S.ClassText>교시</S.ClassText>
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
