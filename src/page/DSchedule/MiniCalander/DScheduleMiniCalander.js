import React, { useEffect, useRef, useState, useCallback } from "react";
import * as S from "../style";
import { useSelector, useDispatch } from "react-redux";
import DScheduleMiniCalanderItem from "../../../component/DSchedule/DScheduleMiniCalanderItem/DScheduleMiniCalanderItem";
import { scheduleMap } from "../../../component/DSchedule/DScheduleItem/DScheduleItem";
import { getScheduleMiniCalander } from "../../../module/action/schedule";

const DScheduleMiniCalander = () => {
  const nowDateObj = new Date();
  const nowYear = nowDateObj.getFullYear();
  const nowMonth = nowDateObj.getMonth() + 1;
  const nowDate = nowDateObj.getDate();
  const {
    calander,
    date: { year, month }
  } = useSelector(store => store.schedule.mini);

  const dispatch = useDispatch();
  const [selectDate, setSelectDate] = useState({
    year: nowYear,
    month: nowMonth,
    date: nowDate
  });
  const dateObj = useRef(new Date());

  useEffect(() => {
    dateObj.current = new Date(year, month - 1);
  }, [year, month]);

  const prevMonth = useCallback(() => {
    const nowMonth = dateObj.current.getMonth();
    dateObj.current.setMonth(nowMonth - 1);

    const year = dateObj.current.getFullYear();
    const month = dateObj.current.getMonth() + 1;

    dispatch(getScheduleMiniCalander({ year, month }));
  }, []);

  const nextMonth = useCallback(() => {
    const nowMonth = dateObj.current.getMonth();
    dateObj.current.setMonth(nowMonth + 1);

    const year = dateObj.current.getFullYear();
    const month = dateObj.current.getMonth() + 1;

    dispatch(getScheduleMiniCalander({ year, month }));
  }, []);

  const selectObj = calander.find(
    ({ year, month, date }) =>
      year === selectDate.year &&
      month === selectDate.month &&
      date === selectDate.date
  );

  const clickHandler = useCallback(date => {
    setSelectDate(date);
  }, []);
  return (
    <S.DScheduleMiniCalander>
      <S.MiniScheduleHeader>
        <S.MiniDateWrap>
          {year}년 {month}월
        </S.MiniDateWrap>
        <S.SvgWrap>
          <svg
            onClick={prevMonth}
            width="7"
            height="12"
            viewBox="0 0 7 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.69516 0.744648C6.40932 0.458815 5.94849 0.458815 5.66266 0.744648L0.815156 5.59215C0.587656 5.81965 0.587656 6.18715 0.815156 6.41465L5.66266 11.2622C5.94849 11.548 6.40932 11.548 6.69516 11.2622C6.98099 10.9763 6.98099 10.5155 6.69516 10.2297L2.47182 6.00048L6.70099 1.77132C6.98099 1.49132 6.98099 1.02465 6.69516 0.744648Z"
              fill="#323232"
            />
          </svg>
          <svg
            onClick={nextMonth}
            width="7"
            height="12"
            viewBox="0 0 7 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.304954 11.2563C0.590787 11.5421 1.05162 11.5421 1.33745 11.2563L6.18495 6.40879C6.41245 6.18129 6.41245 5.81379 6.18495 5.58629L1.33745 0.738789C1.05162 0.452956 0.590787 0.452956 0.304954 0.738789C0.0191203 1.02462 0.0191203 1.48546 0.304954 1.77129L4.52829 6.00046L0.29912 10.2296C0.0191202 10.5096 0.0191203 10.9763 0.304954 11.2563Z"
              fill="#323232"
            />
          </svg>
        </S.SvgWrap>
      </S.MiniScheduleHeader>
      <S.MiniScheduleBody>
        <S.MiniHeader>월</S.MiniHeader>
        <S.MiniHeader>화</S.MiniHeader>
        <S.MiniHeader>수</S.MiniHeader>
        <S.MiniHeader>목</S.MiniHeader>
        <S.MiniHeader>금</S.MiniHeader>
        {calander.map(data => (
          <DScheduleMiniCalanderItem
            {...data}
            key={`${data.year}-${data.month}-${data.date}`}
            onClick={clickHandler}
            isSelect={
              data.year === selectDate.year &&
              data.month === selectDate.month &&
              data.date === selectDate.date
            }
            isToday={
              data.year === nowYear &&
              data.month === nowMonth &&
              data.date === nowDate
            }
          />
        ))}
      </S.MiniScheduleBody>
      <S.MiniFooter>
        {selectObj ? (
          <div>
            <S.Schedule>{scheduleMap[selectObj.schedule]}</S.Schedule>
            <S.TeacherName>{selectObj.floor4 || "선생님"}</S.TeacherName>
            <S.TeacherName>{selectObj.floor3 || "정보가"}</S.TeacherName>
            <S.TeacherName>{selectObj.floor2 || "없어요"}</S.TeacherName>
          </div>
        ) : (
          ""
        )}
      </S.MiniFooter>
    </S.DScheduleMiniCalander>
  );
};

export default DScheduleMiniCalander;
