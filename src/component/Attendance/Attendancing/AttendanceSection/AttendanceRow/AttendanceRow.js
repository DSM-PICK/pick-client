import React, { useCallback, useEffect, useState } from "react";
import * as S from "./styles";
import AttendanceCell from "./AttendanceCell/AttendanceCell";
import { useDispatch, useSelector } from "react-redux";
import {
  postAttendanceStdDataSaga,
  putAttendanceStdDataSaga
} from "../../../../../module/action/attendance";

const AttendanceRow = props => {
  const { currentClassInfo } = useSelector(state => state.attendance);
  const {
    stdState,
    index,
    checkArr,
    handleCheckArr,
    attendanceData,
    memo
  } = props;
  const { name, gradeClassNumber } = props.attendance;

  const [statesArr, setStatesArr] = useState(stdState);

  const cascadeState = ["귀가"];
  const periodArr = stdState.length === 3 ? [8, 9, 10] : [7, 8, 9, 10];
  const todayPeriod = stdState.length === 3 ? 8 : 7;
  const memoArr = Object.values(memo).slice(4 - stdState.length);

  const dispatch = useDispatch();
  const postAttStdDataAndViewChange = useCallback((number, period, state) => {
    postAttendanceStdData(number, period, state);
  }, []);
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
          number,
          period,
          state,
          floor: currentClassInfo.floor,
          priority: currentClassInfo.priority
        })
      );
    },
    [dispatch, currentClassInfo]
  );
  const onStateChange = useCallback(
    (period, value, arr) => {
      if (arr[index]) {
        console.log(arr[index]);
        const allCheckedStudentArr = getAllCheckedStudentArr(arr);

        if (~cascadeState.findIndex(state => state === value)) {
          const allCheckedStudentNumber = allCheckedStudentArr.map(
            stdData => stdData.gradeClassNumber
          );
          cascadeViewChange(allCheckedStudentNumber, period, value);
        } else {
          const numberArr = allCheckedStudentArr.map(stdData => {
            return stdData.gradeClassNumber;
          });
          putAttendanceStdData(numberArr, period, value);
        }
      } else {
        if (~cascadeState.findIndex(state => state === value)) {
          cascadeViewChange(gradeClassNumber, period, value);
        } else {
          postAttStdDataAndViewChange(gradeClassNumber, period, value);
        }
      }
    },
    [cascadeState]
  );
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
    (allCheckedStudentNumber, period, value) => {
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
      setStatesArr(tempArr);
    },
    [stdState]
  );

  useEffect(() => {
    setStatesArr(stdState);
  }, [stdState]);

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
        {statesArr.map((state, idx) => (
          <S.SectionClass key={state + idx}>
            <AttendanceCell
              index={index}
              period={periodArr[idx]}
              periodState={state}
              onStateChange={onStateChange}
              checkArr={checkArr}
              memo={memoArr[idx]}
            />
          </S.SectionClass>
        ))}
      </S.SectionClassWrap>
    </S.Containter>
  );
};

export default AttendanceRow;
