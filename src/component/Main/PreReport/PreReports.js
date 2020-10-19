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
  createPreAbsenceSaga,
  getPreAbsenceListSaga
} from "../../../module/action/pre_absence";
import { setText } from "../../../module/action/auto_complete";
import PreReportShow from "./PreReportShow/PreReportShow";

const PreReports = () => {
  const nameText = useSelector(state => state.autoComplete.text);
  const preAbsenceList = useSelector(state => state.preAbsence.preAbsenceList);

  const dispatch = useDispatch();

  const createPreAbsence = useCallback(
    payload => dispatch(createPreAbsenceSaga(payload)),
    [dispatch]
  );
  const getPreAbsenceList = useCallback(
    () => dispatch(getPreAbsenceListSaga()),
    [dispatch]
  );
  const setNameText = useCallback(
    text => {
      dispatch(setText(text));
    },
    [dispatch]
  );
  const setPreAbsenceState = useCallback(
    payload => dispatch(setPreAbsenceState(payload)),
    [dispatch]
  );

  const initState = () => {
    setPreDate({ year: "", month: "", day: "", period: "" });
    setNextDate({ year: "", month: "", day: "", period: "" });
    setNameText("");
  };

  const onSubmit = () => {
    const data = {
      state: String(preReportState),
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
    initState();
  };

  const date = new Date();

  const preClassInput = useRef("");
  const nextClassInput = useRef("");

  const [preReportState, setPreReportState] = useState(["외출"]);

  const [calcYear, setCalcYear] = useState(date.getFullYear());
  const [calcMonth, setCalcMonth] = useState(date.getMonth());
  const [calcDate, setCalcDate] = useState(getDateObj(calcYear, calcMonth));

  const [preDate, setPreDate] = useState({
    year: "",
    month: "",
    day: "",
    period: ""
  });
  const [nextDate, setNextDate] = useState({
    year: "",
    month: "",
    day: "",
    period: ""
  });

  const [modal, setModal] = useState(false);
  const [height, setHeight] = useState("30px");
  const [preNextState, setPreNextState] = useState("");

  const onOffModal = () => {
    setModal(!modal);
  };

  const onPreClick = () => {
    if (!preDate.period) preClassInput.current.blur();
    setHeight("30px");
    setPreNextState("pre");
    onOffModal();
  };

  const onNextClick = () => {
    if (!nextDate.period) nextClassInput.current.blur();
    setHeight("64px");
    setPreNextState("next");
    onOffModal();
  };

  const onPreSelect = (year, month, day) => {
    if (nextDate.month !== "") {
      if (
        month > nextDate.month ||
        (month == nextDate.month && day > nextDate.day)
      ) {
        setPreDate({
          ...preDate,
          year,
          month: nextDate.month,
          day: nextDate.day
        });
      } else {
        setPreDate({ ...preDate, year, month: month, day });
      }
    } else {
      setPreDate({ ...preDate, year, month: month, day });
    }

    if (!preDate.period) preClassInput.current.focus();
  };

  const onNextSelect = (year, month, day) => {
    if (preDate.month !== "") {
      if (
        month < preDate.month ||
        (month == preDate.month && day < preDate.day)
      ) {
        setNextDate({
          ...nextDate,
          year,
          month: preDate.month,
          day: preDate.day
        });
      } else {
        setNextDate({ ...nextDate, year, month: month, day });
      }
    } else {
      setNextDate({ ...nextDate, year, month: month, day });
    }

    if (!nextDate.period) nextClassInput.current.focus();
  };

  const prevCalcMonth = () => {
    if (calcMonth === 0) {
      setCalcYear(calcYear - 1);
      setCalcMonth(11);
    } else {
      setCalcMonth(calcMonth - 1);
    }
    setCalcDate(getDateObj(calcYear, calcMonth - 1));
  };

  const nextCalcMonth = () => {
    if (calcMonth === 11) {
      setCalcYear(calcYear + 1);
      setCalcMonth(0);
    } else {
      setCalcMonth(calcMonth + 1);
    }
    setCalcDate(getDateObj(calcYear, calcMonth + 1));
  };

  const onSelectDay = (day, isActive) => {
    preNextState === "pre"
      ? onPreSelect(day, isActive)
      : onNextSelect(day, isActive);
    onOffModal();
  };

  const onPreClassChange = useCallback(
    e => {
      if (e.target.value > 10) {
        setPreDate({ ...preDate, period: 10 });
      } else if (e.target.value < 1) {
        setPreDate({ ...preDate, period: 1 });
      } else {
        setPreDate({ ...preDate, period: Number(e.target.value) });
      }
    },
    [preDate]
  );

  const onNextClassChange = useCallback(
    e => {
      if (Number(e.target.value) > 10) {
        setNextDate({ ...nextDate, period: 10 });
      } else if (Number(e.target.value) < 1) {
        setNextDate({ ...nextDate, period: 1 });
      } else {
        setNextDate({ ...nextDate, period: Number(e.target.value) });
      }
    },
    [nextDate]
  );

  const onChangePreReportState = changeState => {
    setPreReportState(changeState);
  };

  return (
    <S.Container>
      <S.Func>
        <S.FuncKindName>
          <S.FuncTitle>종류</S.FuncTitle>
          <S.PreReportStates>
            {C.PreReportStates.map(state => (
              <PreReportState
                key={state}
                stateName={state}
                preReportState={preReportState}
                onChangePreReportState={onChangePreReportState}
              />
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
            preDate={preDate}
            nextDate={nextDate}
            preClassInput={preClassInput}
            nextClassInput={nextClassInput}
            onOffModal={onOffModal}
            onPreClick={onPreClick}
            onNextClick={onNextClick}
            prevCalcMonth={prevCalcMonth}
            nextCalcMonth={nextCalcMonth}
            onSelectDay={onSelectDay}
            onPreClassChange={onPreClassChange}
            onNextClassChange={onNextClassChange}
          />
        </S.FuncDate>
        <S.FuncAdd onClick={() => onSubmit()}>추가하기</S.FuncAdd>
      </S.Func>
      <PreReportShow preAbsenceList={preAbsenceList} />
    </S.Container>
  );
};

export default PreReports;
