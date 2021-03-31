import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { putAttendanceStdDataSaga } from "../../../../../../module/action/attendance";
import AttendanceList from "./AttendanceList";

const AttendanceListContainer = props => {
  const { index } = props;
  const { setAllStudentStateArray } = props;
  const { gradeClassNumber, stateArr } = props.attData;

  const dispatch = useDispatch();
  const attendanceData = useSelector(state => state.attendance.attendanceData);
  const checkArr = useSelector(state => state.attendance.checkArr);
  const currentClassInfo = useSelector(
    state => state.attendance.currentClassInfo
  );

  const cascadeState = ["귀가"];
  const periodArr = [7, 8, 9, 10].reverse().slice(0, stateArr.length).reverse();

  const dispatchPutAttendanceStdDataSaga = useCallback(
    payload => {
      dispatch(putAttendanceStdDataSaga(payload));
    },
    [dispatch]
  );

  const setCascadeNewAllStudentStateArray = (cascadePeriod, value) => {
    const periods = cascadePeriod;

    let tempArr = [];

    for (let i = 0; i < periods[0] - (11 - stateArr.length); i++) {
      tempArr.push(stateArr[i]);
    }
    for (let p = periods[0]; p <= 10; p++) {
      tempArr.push(value);
    }

    setAllStudentStateArray(prevState => {
      const length = prevState[0].stateArr.length;
      const checkArray = checkArr
        .map((data, idx) => (data ? idx : false))
        .filter(data => data !== false);

      if (checkArr[index]) {
        return prevState.map((prevData, mapIdx) =>
          ~checkArray.findIndex(data => data === mapIdx)
            ? {
                ...prevData,
                stateArr: prevData.stateArr.map(state =>
                  ~cascadePeriod.findIndex(data => data === 11 - length)
                    ? value
                    : state
                )
              }
            : prevData
        );
      }

      return prevState.map((prevData, mapIdx) =>
        mapIdx !== index
          ? prevData
          : {
              ...prevData,
              stateArr: tempArr
            }
      );
    });
  };
  const setNewAllStudentStateArray = (period, value) => {
    setAllStudentStateArray(prevState => {
      const length = prevState[0].stateArr.length;
      const checkArray = checkArr
        .map((data, idx) => (data ? idx : false))
        .filter(data => data !== false)
        .reverse();

      if (checkArr[index])
        return prevState.map((prevData, mapIdx) =>
          ~checkArray.findIndex(data => data === mapIdx)
            ? {
                ...prevData,
                stateArr: prevData.stateArr.map((state, stateIdx) =>
                  length + period[0] - 11 === stateIdx ? value : state
                )
              }
            : prevData
        );

      return prevState.map((prevData, mapIdx) =>
        mapIdx !== index
          ? prevData
          : {
              ...prevData,
              stateArr: prevData.stateArr.map((state, stateIdx) =>
                length + period[0] - 11 === stateIdx ? value : state
              )
            }
      );
    });
  };
  const getCascadePeriod = periods => {
    console.log(periodArr);
    return periodArr.filter(p => p >= periods);
  };
  const putAttendanceStdData = (
    numbers,
    periods,
    value,
    currentClassPriority
  ) => {
    const arrPeriod = Array.isArray(periods) ? periods : [periods];
    const cascadePeriod = ~cascadeState.findIndex(state => state === value)
      ? getCascadePeriod(arrPeriod)
      : arrPeriod;

    cascadePeriod.length !== 1
      ? setCascadeNewAllStudentStateArray(cascadePeriod, value)
      : setNewAllStudentStateArray(cascadePeriod, value);

    dispatchPutAttendanceStdDataSaga({
      numbers,
      periods: cascadePeriod,
      state: value,
      currentClassPriority
    });
  };
  const onStateChange = (period, value) => {
    if (checkArr[index]) {
      const checkNumbers = attendanceData
        .filter(
          (_, filterIndex) =>
            ~checkArr
              .map((data, mapIndex) => (data ? mapIndex : null))
              .filter(state => state !== null)
              .findIndex(fIndex => fIndex === filterIndex)
        )
        .map(std => std.gradeClassNumber);

      putAttendanceStdData(
        checkNumbers,
        period,
        value,
        currentClassInfo.priority
      );
    } else {
      putAttendanceStdData(
        gradeClassNumber,
        period,
        value,
        currentClassInfo.priority
      );
    }
  };

  return (
    <AttendanceList
      index={index}
      attData={props.attData}
      onStateChange={onStateChange}
      setAllStudentStateArray={setAllStudentStateArray}
    />
  );
};

export default AttendanceListContainer;
