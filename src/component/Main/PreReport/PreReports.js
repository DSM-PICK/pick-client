import React, { useState, useRef, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as S from "./styles";
import * as C from "./Constant";
import PreReportState from "./PreReportState/PreReportState";
import PreReportName from "./PreReportName/PreReportName";
import PreReportDate from "./PreReportDate/PreReportDate";
import getDateObj from "../../../lib/calander";
import { makeMonth2Digit } from "../../../lib/attendanceApi";
import {
  getPreAbsenceListSaga,
  createPreAbsenceSaga,
  setPreAbsenceNextDate,
  setPreAbsencePreDate
} from "../../../module/action/pre_absence";
import PreReportShow from "./PreReportShow/PreReportShow";

const PreReports = () => {
  const nameText = useSelector(state => state.preAbsence.text);
  const preAbsenceData = useSelector(state => state.preAbsence);
  const { state, preDate, nextDate } = preAbsenceData;

  const dispatch = useDispatch();

  const createPreAbsence = useCallback(
    payload => dispatch(createPreAbsenceSaga(payload)),
    [dispatch]
  );
  const getPreAbsenceList = useCallback(
    () => dispatch(getPreAbsenceListSaga()),
    [dispatch]
  );
  const setPreDate = useCallback(
    payload => dispatch(setPreAbsencePreDate(payload)),
    [dispatch]
  );
  const setNextDate = useCallback(
    payload => dispatch(setPreAbsenceNextDate(payload)),
    [dispatch]
  );

  const onSubmit = () => {
    const data = {
      state: String(state),
      stdnum: Number(nameText.slice(0, 4)),
      start_date: `${preDate.year}-${makeMonth2Digit(preDate.month)}-${
        preDate.day
      }`,
      start_period: String(preDate.period),
      end_date: `${nextDate.year}-${makeMonth2Digit(nextDate.month)}-${
        nextDate.day
      }`,
      end_period: String(nextDate.period)
    };

    createPreAbsence(data);
    getPreAbsenceList();
  };

  const date = new Date();

  const preClassInput = useRef("");
  const nextClassInput = useRef("");

  const [calcYear, setCalcYear] = useState(date.getFullYear());
  const [calcMonth, setCalcMonth] = useState(date.getMonth());
  const [calcDate, setCalcDate] = useState(getDateObj(calcYear, calcMonth));

  const [modal, setModal] = useState(false);
  const [height, setHeight] = useState("30px");
  const [preNextState, setPreNextState] = useState("");

  const onOffModal = () => {
    setModal(!modal);
  };

  const onPreReportClick = isSetPre => {
    const date = isSetPre ? preDate : nextDate;
    const inputRef = isSetPre ? preClassInput : nextClassInput;
    if (!date.period) inputRef.current.blur();
    setPreNextState(isSetPre ? "pre" : "next");
    setHeight(isSetPre ? "30px" : "64px");
    onOffModal();
  };

  const onPreNextSelect = (year, month, day, isSetPre) => {
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

  const onClickCalcMonth = isSetPre => {
    const calc = isSetPre ? -1 : 1;
    const tmpMonth = isSetPre ? 11 : 0;

    if (calcMonth === 0) {
      setCalcYear(calcYear + calc);
      setCalcMonth(tmpMonth);
    } else {
      setCalcMonth(calcMonth + calc);
    }
    setCalcDate(getDateObj(calcYear, calcMonth + calc));
  };

  const onSelectDay = (year, month, date) => {
    onPreNextSelect(year, month, date, preNextState === "pre");
    onOffModal();
  };

  const onClassChange = useCallback(
    (isSetPre, e) => {
      const setDate = isSetPre ? setPreDate : setNextDate;
      const date = isSetPre ? preDate : nextDate;
      if (e.target.value > 10) {
        setDate({ ...date, period: 10 });
      } else if (e.target.value < 1) {
        setDate({ ...date, period: 1 });
      } else {
        setDate({
          ...date,
          period: Number(e.target.value)
        });
      }
    },
    [date]
  );

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
            modal={modal}
            height={height}
            calcDate={calcDate}
            calcMonth={calcMonth}
            calcYear={calcYear}
            preClassInput={preClassInput}
            nextClassInput={nextClassInput}
            onOffModal={onOffModal}
            onClickCalcMonth={onClickCalcMonth}
            onSelectDay={onSelectDay}
            onPreNextSelect={onPreNextSelect}
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
