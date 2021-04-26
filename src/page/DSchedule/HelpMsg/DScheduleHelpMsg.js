import React, { useMemo } from "react";
import { useSelector, shallowEqual } from "react-redux";
import * as S from "./styles";

const DScheduleHelpMsg = () => {
  const { isChangeMode, firstSelect, secondSelect } = useSelector(
    store => ({
      isChangeMode: store.schedule.isChangeMode,
      firstSelect: store.schedule.firstSelect,
      secondSelect: store.schedule.secondSelect
    }),
    shallowEqual
  );
  const render = useMemo(() => {
    if (!firstSelect && !secondSelect) {
      return (
        <S.TextWrapper>
          <p>일정 교체가 필요한</p>
          <p>날짜를 선택해주세요</p>
        </S.TextWrapper>
      );
    }
    if (firstSelect && !secondSelect) {
      const { month, date } = firstSelect;
      return (
        <>
          {month}월 {date}일
          <svg
            width="16"
            height="8"
            viewBox="0 0 16 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12.01 3H0V5H12.01V8L16 4L12.01 0V3Z" fill="white" />
          </svg>
        </>
      );
    }
    if (firstSelect && secondSelect) {
      const { month: month1, date: date1 } = firstSelect;
      const { month: month2, date: date2, name } = secondSelect;

      return (
        <>
          {month1}월 {date1}일
          <svg
            width="16"
            height="8"
            viewBox="0 0 16 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12.01 3H0V5H12.01V8L16 4L12.01 0V3Z" fill="white" />
          </svg>
          {month2}월 {date2}일 {name}
        </>
      );
    }
  }, [firstSelect, secondSelect]);

  return isChangeMode && <S.Container>{render}</S.Container>;
};

export default DScheduleHelpMsg;
