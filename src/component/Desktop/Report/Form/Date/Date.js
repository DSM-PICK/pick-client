import React from "react";
import { useDesktopReportState } from "../../../../../lib/hooks/desktop/report";
import * as S from "../../styles";

const Date = () => {
  const { state, setState } = useDesktopReportState();
  const { startDate, endDate, endPeriod, startPeriod, selectedStudent } = state;
  const { setEndPeriod, setStartPeriod } = setState;
  const renderDate = (startDate, endDate, startPeriod, endPeriod) => {
    if (
      !startDate.year ||
      !startDate.month ||
      !startDate.date ||
      !endDate.year ||
      !endDate.month ||
      !endDate.date
    ) {
      return "좌측 캘린더에서 날짜를 클릭하세요.";
    }
    const startPeriodInputChangeHandler = () => event => {
      setStartPeriod({ id: selectedStudent, period: event.target.value });
    };
    const endPeriodInputChangeHandler = () => event => {
      setEndPeriod({ id: selectedStudent, period: event.target.value });
    };
    return (
      <S.FomrDatePeriodInputWrapper>
        {getTextDate(startDate)}{" "}
        <S.FormDatePeriodInput
          value={startPeriod}
          onChange={startPeriodInputChangeHandler()}
          type="number"
        />
        교시 ~ {getTextDate(endDate)}
        <S.FormDatePeriodInput
          value={endPeriod}
          onChange={endPeriodInputChangeHandler()}
          type="number"
        />
        교시
      </S.FomrDatePeriodInputWrapper>
    );
  };
  const getTextDate = date => {
    return `${date.month}월 ${date.date}일`;
  };
  return (
    <S.FormDate>
      <S.FormText>결석일</S.FormText>
      <S.FormDateInput>
        {renderDate(startDate, endDate, startPeriod, endPeriod)}
      </S.FormDateInput>
    </S.FormDate>
  );
};

export default Date;
