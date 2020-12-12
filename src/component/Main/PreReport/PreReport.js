import React, { useRef, useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as S from "./styles";
import * as C from "./Constant";
import PreReportState from "./PreReportState/PreReportState";
import PreReportName from "./PreReportName/PreReportName";
import PreReportDate from "./PreReportDate/PreReportDate";
import getDateObj from "../../../lib/calander";
import { makeDate2Digit } from "../../../lib/attendanceApi";
import {
  getPreReportListSaga,
  createPreReportSaga,
  setPreReportNextDate,
  setPreReportPreDate,
  setPreReportUtils,
  setPreReportCalcDate,
  setPreReportCalcYear,
  setPreReportCalcMonth,
  setPreReportIsClickPreState
} from "../../../module/action/pre_report";
import PreReportShow from "./PreReportShow/PreReportShow";
import CalendarModal from "../../Modal/CalendarModal/CalendarModal";
import { dropModal, showModal } from "../../../module/action/modal_wrap";

const PreReports = () => {
  const nameText = useSelector(state => state.preReport.text);
  const preReportData = useSelector(state => state.preReport);
  const { state, preDate, nextDate } = preReportData;

  const dispatch = useDispatch();

  const ShowCalendarModal = useCallback(() => {
    dispatch(showModal(CalendarModal));
  }, [dispatch]);
  const DropCalendarModal = useCallback(() => {
    dispatch(dropModal());
  }, [dispatch]);
  const createPreReport = useCallback(
    payload => dispatch(createPreReportSaga(payload)),
    [dispatch]
  );
  const getPreReportList = useCallback(() => dispatch(getPreReportListSaga()), [
    dispatch
  ]);
  const setPreDate = useCallback(
    payload => dispatch(setPreReportPreDate(payload)),
    [dispatch]
  );
  const setNextDate = useCallback(
    payload => dispatch(setPreReportNextDate(payload)),
    [dispatch]
  );
  const setUtils = useCallback(
    payload => dispatch(setPreReportUtils(payload)),
    [dispatch]
  );
  const setCalcDate = useCallback(
    payload => dispatch(setPreReportCalcDate(payload)),
    [dispatch]
  );
  const setCalcYear = useCallback(
    payload => dispatch(setPreReportCalcYear(payload)),
    [dispatch]
  );
  const setCalcMonth = useCallback(
    payload => dispatch(setPreReportCalcMonth(payload)),
    [dispatch]
  );
  const setPreState = useCallback(
    payload => dispatch(setPreReportIsClickPreState(payload)),
    [dispatch]
  );

  const onSubmit = () => {
    const data = {
      state: String(state),
      stdnum: Number(nameText.slice(0, 4)),
      start_date: `${preDate.year}-${makeDate2Digit(
        preDate.month
      )}-${makeDate2Digit(preDate.day)}`,
      start_period: String(preDate.period),
      end_date: `${nextDate.year}-${makeDate2Digit(
        nextDate.month
      )}-${makeDate2Digit(nextDate.day)}`,
      end_period: String(nextDate.period)
    };

    createPreReport(data);
    getPreReportList();
  };

  const preClassInput = useRef("");
  const nextClassInput = useRef("");

  const onPreReportClick = isSetPre => {
    const date = isSetPre ? preDate : nextDate;
    const inputRef = isSetPre ? preClassInput : nextClassInput;
    if (!date.period) inputRef.current.blur();
    setPreState(isSetPre ? "pre" : "next");
    ShowCalendarModal();
  };

  const onPreNextSelect = (year, month, day, isSetPre, preDate, nextDate) => {
    const date = isSetPre ? preDate : nextDate;
    const otherDate = isSetPre ? nextDate : preDate;
    const refInput = isSetPre ? preClassInput : nextClassInput;
    const setDate = isSetPre ? setPreDate : setNextDate;

    if (nextDate.month !== "") {
      if (
        isSetPre
          ? month > nextDate.month ||
            (month == nextDate.month && day > nextDate.day)
          : month < preDate.month ||
            (month == preDate.month && day < preDate.day)
      ) {
        setDate({
          ...date,
          year,
          month: otherDate.month,
          day: otherDate.day
        });
      } else {
        setDate({ ...date, year, month, day });
      }
    } else {
      setDate({ ...date, year, month, day });
    }

    if (!date.period) refInput.current.focus();
  };

  const onClickCalcMonth = (year, month, isSetPre) => {
    const calcs = isSetPre ? -1 : 1;
    const tmpMonth = isSetPre ? 11 : 0;

    if (month === 0) {
      setCalcYear(isSetPre ? year + calcs : year);
      setCalcMonth(isSetPre ? tmpMonth : month + calcs);
    } else if (month === 11) {
      setCalcYear(isSetPre ? year : year + calcs);
      setCalcMonth(isSetPre ? month + calcs : tmpMonth);
    } else {
      setCalcMonth(month + calcs);
    }

    setCalcDate(getDateObj(year, month + calcs));
  };

  const onSelectDay = (year, month, date, state, preDate, nextDate) => {
    onPreNextSelect(year, month, date, state === "pre", preDate, nextDate);
    DropCalendarModal();
  };

  const onClassChange = useCallback((isSetPre, date, preDate, nextDate, e) => {
    const setDate = isSetPre ? setPreDate : setNextDate;

    if (Number(e.target.value) > 10) {
      setDate({ ...date, period: 10 });
    } else if (Number(e.target.value) < 1) {
      setDate({ ...date, period: 0 });
    } else {
      setDate({
        ...date,
        period: Number(e.target.value)
      });
    }
  }, []);

  useEffect(() => {
    const date = new Date();

    setUtils([onSelectDay, onClickCalcMonth]);
    setCalcYear(date.getFullYear());
    setCalcMonth(date.getMonth());
    setCalcDate(getDateObj(date.getFullYear(), date.getMonth()));
  }, []);

  return (
    <S.Container>
      <S.Func>
        <S.FuncKindName>
          <S.FuncTitle>종류</S.FuncTitle>
          <S.PreReportStates>
            {C.PreReportStates.map(state => (
              <PreReportState key={state} stateName={state} />
            ))}
          </S.PreReportStates>
        </S.FuncKindName>
        <S.FuncKindName>
          <S.FuncTitle>이름</S.FuncTitle>
          <PreReportName />
        </S.FuncKindName>
        <S.FuncDate>
          <S.FuncTitle>기간</S.FuncTitle>
          <PreReportDate
            refInputArr={[preClassInput, nextClassInput]}
            onClassChange={onClassChange}
            onPreReportClick={onPreReportClick}
          />
        </S.FuncDate>
        <S.FuncAdd onClick={onSubmit}>추가하기</S.FuncAdd>
      </S.Func>
      <PreReportShow />
    </S.Container>
  );
};

export default PreReports;
