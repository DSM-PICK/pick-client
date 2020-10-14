import React, { useState, useRef, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as S from "./styles";
import * as C from "./Constant";
import PreReportState from "./PreReportState/PreReportState";
import PreReportName from "./PreReportName/PreReportName";
import PreReportDate from "./PreReportDate/PreReportDate";
import DeleteModal from "../Modal/DeleteModal";
import getDateObj from "../../../lib/calander";
import { makeMonth2Digit } from "../../../lib/attendanceAPI";
import { createPreAbsenceSaga } from "../../../module/action/pre_absence";

const PreReport = () => {
  const nameText = useSelector(state => state.autoComplete.text);
  const preAbsenceList = useSelector(state => state.preAbsence.preAbsenceList);

  console.log(preAbsenceList);

  const dispatch = useDispatch();

  const createPreAbsence = useCallback(
    payload => {
      dispatch(createPreAbsenceSaga(payload));
    },
    [dispatch]
  );

  const onSubmit = () => {
    const data = {
      state: String(preReportState),
      stdnum: Number(nameText.slice(0, 4)),
      start_date: `${2020}-${makeMonth2Digit(preMonth)}-${preDay}`,
      start_period: String(preClassValue),
      end_date: `${2020}-${makeMonth2Digit(nextMonth)}-${nextDay}`,
      end_period: String(nextClassValue)
    };
    createPreAbsence(data);
  };

  const date = new Date();

  const preClassInput = useRef("");
  const nextClassInput = useRef("");

  const [preReportState, setPreReportState] = useState(["외출"]);

  const [calcYear, setCalcYear] = useState(date.getFullYear());
  const [calcMonth, setCalcMonth] = useState(date.getMonth());
  const [calcDate, setCalcDate] = useState(getDateObj(calcYear, calcMonth));
  const [preMonth, setPreMonth] = useState("");
  const [nextMonth, setNextMonth] = useState("");
  const [preDay, setPreDay] = useState("");
  const [nextDay, setNextDay] = useState("");
  const [preClassValue, setPreClassValue] = useState("");
  const [nextClassValue, setNextClassValue] = useState("");

  const [modal, setModal] = useState(false);
  const [height, setHeight] = useState("30px");
  const [preNextState, setPreNextState] = useState("");

  const [delModal, setDelModal] = useState(false);

  const onOffModal = () => {
    setModal(!modal);
  };

  const onOffDelModal = () => {
    setDelModal(!delModal);
  };

  const onPreClick = () => {
    preClassInput.current.blur();
    setHeight("30px");
    setPreNextState("pre");
    onOffModal();
  };

  const onNextClick = () => {
    nextClassInput.current.blur();
    setHeight("64px");
    setPreNextState("next");
    onOffModal();
  };

  const onPreSelect = day => {
    const tempPreMonth = calcMonth + 1;

    setPreClassValue("");

    if (nextMonth !== "") {
      if (
        tempPreMonth > nextMonth ||
        (tempPreMonth == nextMonth && day > nextDay)
      ) {
        setPreMonth(nextMonth);
        setPreDay(nextDay);
      } else {
        setPreMonth(tempPreMonth);
        setPreDay(day);
      }
    } else {
      setPreMonth(tempPreMonth);
      setPreDay(day);
    }

    preClassInput.current.focus();
  };

  const onNextSelect = day => {
    const tempNextMonth = calcMonth + 1;

    setNextClassValue("");

    if (preMonth !== "") {
      if (
        tempNextMonth < preMonth ||
        (tempNextMonth == preMonth && day < preDay)
      ) {
        setNextMonth(preMonth);
        setNextDay(preDay);
      } else {
        setNextMonth(tempNextMonth);
        setNextDay(day);
      }
    } else {
      setNextMonth(tempNextMonth);
      setNextDay(day);
    }

    nextClassInput.current.focus();
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

  const onSelectDay = day => {
    preNextState === "pre" ? onPreSelect(day) : onNextSelect(day);
    onOffModal();
  };

  const onPreClassChange = useCallback(e => {
    if (e.target.value > 10) {
      setPreClassValue(10);
    } else if (e.target.value < 0) {
      setPreClassValue(1);
    } else {
      setPreClassValue(Number(e.target.value));
    }
  }, []);

  const onNextClassChange = useCallback(e => {
    if (Number(e.target.value) > 10) {
      setNextClassValue(10);
    } else if (Number(e.target.value) < 0) {
      setNextClassValue(1);
    } else {
      setNextClassValue(Number(e.target.value));
    }
  }, []);

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
            preMonth={preMonth}
            nextMonth={nextMonth}
            preDay={preDay}
            nextDay={nextDay}
            preClassValue={preClassValue}
            nextClassValue={nextClassValue}
            preClassInput={preClassInput}
            nextClassInput={nextClassInput}
            onOffModal={onOffModal}
            onPreClick={onPreClick}
            onNextClick={onNextClick}
            onPreSelect={onPreSelect}
            onNextSelect={onNextSelect}
            prevCalcMonth={prevCalcMonth}
            nextCalcMonth={nextCalcMonth}
            onSelectDay={onSelectDay}
            onPreClassChange={onPreClassChange}
            onNextClassChange={onNextClassChange}
          />
        </S.FuncDate>
        <S.FuncAdd onClick={() => onSubmit()}>추가하기</S.FuncAdd>
      </S.Func>
      <S.Show>
        <S.ShowHeader>
          <S.ShowHeaderStd>학생</S.ShowHeaderStd>
          <S.ShowHeaderKind>종류</S.ShowHeaderKind>
          <S.ShowHeaderDate>기간</S.ShowHeaderDate>
        </S.ShowHeader>
        <S.ShowBody>
          {preAbsenceList &&
            preAbsenceList.map(preAbsenceData => (
              <S.ShowBodyBox onClick={onOffDelModal} key={preAbsenceData.id}>
                <S.ShowBodyStd>{preAbsenceData.student_num}</S.ShowBodyStd>
                <S.ShowBodyKind>{preAbsenceData.state}</S.ShowBodyKind>
                <S.ShowBodyDate>{preAbsenceData.id}</S.ShowBodyDate>
              </S.ShowBodyBox>
            ))}
        </S.ShowBody>
        {delModal && <DeleteModal onOffDelModal={onOffDelModal} />}
      </S.Show>
    </S.Container>
  );
};

export default PreReport;
