import React, { useCallback } from "react";
import DScheduleItem from "../../../component/DSchedule/DScheduleItem/DScheduleItem";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import * as S from "../style";
import * as scheduleApi from "../../../lib/api/schedule";
import {
  getSchedule,
  getScheduleMiniCalander,
  setFirstSelect,
  setSecondSelect,
  resetScheduleSelect
} from "../../../module/action/schedule";

const DScheduleCalander = () => {
  const dispatch = useDispatch();
  const { calander, isChangeMode, firstSelect, secondSelect } = useSelector(
    store => ({
      calander: store.schedule.calander.calander,
      isChangeMode: store.schedule.isChangeMode,
      firstSelect: store.schedule.firstSelect,
      secondSelect: store.schedule.secondSelect
    }),
    shallowEqual
  );
  const teacherName = window.localStorage.getItem("teacherName");
  const nowDateObj = new Date();
  const nowYear = nowDateObj.getFullYear();
  const nowMonth = nowDateObj.getMonth() + 1;
  const nowDate = nowDateObj.getDate();

  const nameClickHandler = useCallback(
    async (e, data) => {
      if (!firstSelect) {
        if (data.name !== teacherName) return;
        e.currentTarget.classList.add("first-select");
        dispatch(setFirstSelect(data));
        return;
      }
      const {
        year: year1,
        month: month1,
        date: date1,
        floor: floor1
      } = firstSelect;
      const {
        year: year2,
        month: month2,
        date: date2,
        floor: floor2
      } = secondSelect;

      const fulLDate1 = `${year1}-${String(month1).padStart(2, "0")}-${String(
        date1
      ).padStart(2, "0")}`;
      const fulLDate2 = `${year2}-${String(month2).padStart(2, "0")}-${String(
        date2
      ).padStart(2, "0")}`;

      try {
        await scheduleApi.changeSchedule({
          date1: fulLDate1,
          date2: fulLDate2,
          floor1,
          floor2
        });
        dispatch(getSchedule({ year: nowYear, month: nowMonth }));
        dispatch(getScheduleMiniCalander({ year: nowYear, month: nowMonth }));
        dispatch(resetScheduleSelect());
        const secSelectElement = document.querySelector(".blue");
        const selectElement = document.querySelector(".first-select");
        if (selectElement) selectElement.classList.remove("first-select");
        if (secSelectElement) secSelectElement.classList.remove("blue");

        alert("일정을 교체했습니다");
      } catch (err) {
        console.log(err);
      }
    },
    [(firstSelect, secondSelect)]
  );

  const nameHoverHandler = useCallback((e, data) => {
    if (e.currentTarget.className.includes("first-select")) return;
    e.currentTarget.classList.add("blue");

    dispatch(setSecondSelect(data));
  }, []);
  const nameBlurHandler = useCallback(e => {
    if (e.currentTarget.className.includes("first-select")) return;
    e.currentTarget.classList.remove("blue");
  }, []);
  return (
    <S.Body>
      <S.DScheduleHeader>
        <S.DScheduleItem>월</S.DScheduleItem>
        <S.DScheduleItem>화</S.DScheduleItem>
        <S.DScheduleItem>수</S.DScheduleItem>
        <S.DScheduleItem>목</S.DScheduleItem>
        <S.DScheduleItem>금</S.DScheduleItem>
      </S.DScheduleHeader>
      <S.DScheduleBody>
        {calander.map(data => (
          <DScheduleItem
            onNameHover={firstSelect ? nameHoverHandler : undefined}
            onNameBlur={firstSelect ? nameBlurHandler : undefined}
            onNameClick={isChangeMode ? nameClickHandler : undefined}
            activeName={teacherName}
            hoverMode={isChangeMode}
            key={`${data.year}-${data.month}-${data.date}`}
            isToday={
              data.year === nowYear &&
              data.month === nowMonth &&
              data.date === nowDate
            }
            {...data}
          />
        ))}
      </S.DScheduleBody>
    </S.Body>
  );
};

export default DScheduleCalander;
