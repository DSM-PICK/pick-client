import React, { useCallback, useEffect, useState } from "react";
import * as S from "./styles";
import AttendanceCell from "./AttendanceCell/AttendanceCell";
import { useDispatch, useSelector } from "react-redux";
import {
  postAttendanceStdDataSaga,
  putAttendanceStdDataSaga,
  modifyAttendancesDataSaga
} from "../../../../../module/action/attendance";

const AttendanceRow = props => {
  const { stdState, index, checkArr, sArr, dataSArr } = props;
  const { handleCheckArr, attendanceData, setAllStudentStateArray } = props;
  const { name, gradeClassNumber, memo } = props.attendance;

  const dispatch = useDispatch();
  const { currentClassInfo } = useSelector(state => state.attendance);

  const cascadeState = ["귀가"];
  const periodArr = stdState.length === 3 ? [8, 9, 10] : [7, 8, 9, 10];
  const todayPeriod = stdState.length === 3 ? 8 : 7;

  const putAttendanceStdData = useCallback(
    (numbers, periods, state) => {
      dispatch(
        putAttendanceStdDataSaga({
          state,
          numbers,
          periods,
          floor: currentClassInfo.floor,
          priority: currentClassInfo.priority
        })
      );
    },
    [dispatch, currentClassInfo]
  );
  const postAttendanceStdData = useCallback(
    (number, period, state) => {
      dispatch(
        postAttendanceStdDataSaga({
          state,
          number,
          period,
          floor: currentClassInfo.floor,
          priority: currentClassInfo.priority
        })
      );
    },
    [dispatch, currentClassInfo]
  );

  const onStateChange = (period, value, arr) => {
    if (arr[index]) {
      const allCheckedStudentArr = getAllCheckedStudentArr(arr);
      const gradeClassNumberArray = allCheckedStudentArr.map(
        stdData => stdData.gradeClassNumber
      );
      const gradeClassNumberIndexArray = attendanceData
        .map((data, idx) =>
          ~gradeClassNumberArray.findIndex(num => num === data.gradeClassNumber)
            ? idx
            : null
        )
        .filter(data => data !== null);

      if (~cascadeState.findIndex(state => state === value)) {
        cascadeViewChange(
          period,
          value,
          gradeClassNumberArray,
          gradeClassNumberIndexArray
        );
      } else {
        setAllStudentStateArray(prevState =>
          prevState.map((datas, idx) =>
            ~gradeClassNumberIndexArray.findIndex(data => data === idx)
              ? datas.map((prevArr, idx) =>
                  idx === period - todayPeriod
                    ? { memo: prevArr.memo, state: value }
                    : prevArr
                )
              : datas
          )
        );

        putAttendanceStdData(gradeClassNumberArray, period, value);
      }
    } else {
      const gradeClassNumberArray = Array.isArray(gradeClassNumber)
        ? gradeClassNumber
        : [gradeClassNumber];
      const gradeClassNumberIndexArray = attendanceData
        .map((data, idx) =>
          ~gradeClassNumberArray.findIndex(num => num === data.gradeClassNumber)
            ? idx
            : null
        )
        .filter(data => data !== null);
      if (~cascadeState.findIndex(state => state === value)) {
        cascadeViewChange(
          period,
          value,
          gradeClassNumberArray,
          gradeClassNumberIndexArray
        );
      } else {
        setAllStudentStateArray(prevState =>
          prevState.map((datas, idx) =>
            ~gradeClassNumberIndexArray.findIndex(data => data === idx)
              ? datas.map((prevArr, idx) =>
                  idx === period - todayPeriod
                    ? { memo: prevArr.memo, state: value }
                    : prevArr
                )
              : datas
          )
        );
        postAttendanceStdData(gradeClassNumber, period, value);
      }
    }
  };
  const onWriteMemo = (className, period) => {
    let selectedNumbers = attendanceData[index].gradeClassNumber;
    let selectedIndex = [index];

    if (checkArr[index]) {
      selectedIndex = checkArr
        .map((data, index) => (data ? index : false))
        .filter(data => data !== false);
      selectedNumbers = attendanceData
        .filter(
          (_, filterIndex) =>
            ~checkArr
              .map((data, mapIndex) => (data ? mapIndex : null))
              .filter(_ => _ !== null)
              .findIndex(fIndex => fIndex === filterIndex)
        )
        .map(std => std.gradeClassNumber);
    }

    setAllStudentStateArray(prevState =>
      prevState.map((datas, idx) =>
        ~selectedIndex.findIndex(data => data === idx)
          ? datas.map((prevArr, idx) =>
              idx === period - todayPeriod
                ? { memo: className, state: "이동" }
                : prevArr
            )
          : datas
      )
    );

    dispatch(
      modifyAttendancesDataSaga({
        numbers: selectedNumbers,
        periods: period,
        state: "이동",
        memo: className
      })
    );
  };

  const getAllCheckedStudentArr = useCallback(
    arr => {
      const checkedIndexArr = arr
        .map((check, mapIndex) => (check === true ? mapIndex : false))
        .filter(data => data !== false);
      const checkedStudentArr = attendanceData.filter(
        (_, filterIndex) =>
          ~checkedIndexArr.findIndex(idx => idx === filterIndex)
      );

      return checkedStudentArr;
    },
    [checkArr, attendanceData]
  );

  const cascadeViewChange = useCallback(
    (period, value, allCheckedStudentNumber, gradeClassNumberIndexArray) => {
      let tempArr = [];
      let periodArr = [];

      for (let i = 0; i < period - todayPeriod; i++) {
        tempArr.push(stdState[i]);
      }
      for (let p = period; p <= 10; p++) {
        periodArr.push(p);
        tempArr.push(value);
      }

      putAttendanceStdData(allCheckedStudentNumber, periodArr, value);
      setAllStudentStateArray(prev =>
        prev.map((datas, idx) =>
          ~gradeClassNumberIndexArray.findIndex(data => data === idx)
            ? datas.map((mapData, mapIdx) => ({
                state: tempArr[mapIdx],
                memo: mapData.memo
              }))
            : datas
        )
      );
    },
    [sArr, stdState]
  );

  return (
    <S.Containter check={checkArr[index]}>
      <S.SectionCheckboxWrap>
        <S.SectionCheckbox
          type="checkbox"
          id={`${gradeClassNumber}-${index}`}
          checked={checkArr[index]}
          onClick={() => handleCheckArr(index)}
        />
        <S.SectionCheckboxLabel
          htmlFor={`${gradeClassNumber}-${index}`}
        ></S.SectionCheckboxLabel>
      </S.SectionCheckboxWrap>
      <S.SectionStdNum>{gradeClassNumber}</S.SectionStdNum>
      <S.SectionName>{name}</S.SectionName>
      <S.SectionClassWrap>
        {dataSArr.map((arr, idx) => (
          <S.SectionClass key={arr.state + idx}>
            <AttendanceCell
              index={index}
              period={periodArr[idx]}
              periodState={arr.state}
              checkArr={checkArr}
              memo={arr.memo}
              cellIdx={idx}
              onWriteMemo={onWriteMemo}
              onStateChange={onStateChange}
            />
          </S.SectionClass>
        ))}
      </S.SectionClassWrap>
    </S.Containter>
  );
};

export default AttendanceRow;
