import React, { useRef, useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as S from "./styles";
import * as C from "./Constant";
import PreReportState from "./PreReportState/PreReportState";
import PreReportName from "./PreReportName/PreReportName";
import PreReportDate from "./PreReportDate/PreReportDate";
import getDateObj from "../../../lib/calander";
import {
  checkPreReportData,
  checkPreReportName,
  makeDate2Digit
} from "../../../lib/attendanceApi";
import {
  getPreReportListSaga,
  createPreReportSaga,
  setPreReportNextDate,
  setPreReportPreDate,
  setPreReportUtils,
  setPreReportCalcDate,
  setPreReportCalcYear,
  setPreReportCalcMonth,
  setPreReportIsClickPreState,
  setNames,
  setPreReportText
} from "../../../module/action/pre_report";
import PreReportShow from "./PreReportShow/PreReportShow";
import CalendarModal from "../../Modal/CalendarModal/CalendarModal";
import { dropModal, showModal } from "../../../module/action/modal_wrap";
import PreReportEnroll from "./PreReportEnroll/PreReportEnroll";

const PreReports = () => {
  const nameText = useSelector(state => state.preReport.text);
  const nameArr = useSelector(state => state.preReport.names);
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
  const setNameArr = useCallback(payload => dispatch(setNames(payload)), [
    dispatch
  ]);
  const setNameComplete = useCallback(
    payload => dispatch(setPreReportText(payload)),
    [dispatch]
  );

  const onEnroll = useCallback(() => {
    if (!!~nameArr.findIndex(name => name === nameText)) {
      alert("중복된 이름입니다.");
    } else if (checkPreReportName(nameText)) {
      setNameArr([...nameArr, nameText]);
      setNameComplete("");
    }
  }, [nameArr, nameText]);

  const onSubmit = () => {
    const data = {
      state: String(state),
      start_date: `${preDate.year}-${makeDate2Digit(
        preDate.month
      )}-${makeDate2Digit(preDate.day)}`,
      start_period: String(preDate.period),
      end_date: `${nextDate.year}-${makeDate2Digit(
        nextDate.month
      )}-${makeDate2Digit(nextDate.day)}`,
      end_period: String(nextDate.period)
    };

    for (let name of nameArr) {
      createPreReport({ ...data, stdnum: Number(name.slice(0, 4)) });
    }
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
        <S.FuncKindState>
          <S.FuncTitle>종류</S.FuncTitle>
          <S.PreReportStates>
            {C.PreReportStates.map(state => (
              <PreReportState key={state} stateName={state} />
            ))}
          </S.PreReportStates>
        </S.FuncKindState>
        <S.FuncDate>
          <S.FuncTitle>날짜</S.FuncTitle>
          <PreReportDate
            refInputArr={[preClassInput, nextClassInput]}
            onClassChange={onClassChange}
            onPreReportClick={onPreReportClick}
          />
        </S.FuncDate>
        <S.FuncKindName>
          <S.FuncTitle>이름</S.FuncTitle>
          <S.FuncNameWrap>
            <PreReportName />
            <S.FuncAdd onClick={onEnroll}>추가</S.FuncAdd>
          </S.FuncNameWrap>
        </S.FuncKindName>
      </S.Func>
      <PreReportEnroll onSubmit={onSubmit} />
    </S.Container>
  );
};

export default PreReports;
