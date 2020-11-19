import React from "react";
import * as S from "./styles";
import PreReportCalander from "./PreReportCalendar/PreReportCalander";
import PreReportModal from "./PreReportModal/PreReportModal";
import { useSelector } from "react-redux";

const PreReportDate = props => {
  const { modal, height, calcDate, calcMonth, calcYear } = props;
  const {
    onOffModal,
    onSelectDay,
    onClassChange,
    onPreReportClick,
    onClickCalcMonth
  } = props;

  const preAbsenceData = useSelector(state => state.preReport);
  const { preDate, nextDate } = preAbsenceData;
  const dateArr = [preDate, nextDate];
  const refInputArr = [props.preClassInput, props.nextClassInput];

  return (
    <S.Container>
      {dateArr.map((date, index) => (
        <S.Date key={index}>
          <S.Month month={date.month} onClick={() => onPreReportClick(!index)}>
            월
          </S.Month>
          <S.Day day={date.day} onClick={() => onPreReportClick(!index)}>
            일
          </S.Day>
          <S.ClassWrap>
            <S.Class
              type="number"
              placeholder="__"
              ref={refInputArr[index]}
              value={date.period}
              onChange={e => onClassChange(!index, e)}
            />
            <S.ClassText>교시</S.ClassText>
            {!index && <S.Additional>~</S.Additional>}
          </S.ClassWrap>
        </S.Date>
      ))}
      {modal && (
        <PreReportCalander
          height={height}
          calcDate={calcDate}
          calcMonth={calcMonth}
          calcYear={calcYear}
          onOffModal={onOffModal}
          onSelectDay={onSelectDay}
          onClickCalcMonth={onClickCalcMonth}
        />
      )}
      {modal && <PreReportModal onOffModal={onOffModal} />}
    </S.Container>
  );
};

export default PreReportDate;
