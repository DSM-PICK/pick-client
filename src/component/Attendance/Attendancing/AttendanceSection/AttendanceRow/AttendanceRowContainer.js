import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setCheckArr,
  setCheckArrWithDisable
} from "../../../../../module/action/attendance";
import AttendanceRow from "./AttendanceRow";
import * as S from "./styles";

const AttendanceRowContainer = () => {
  const dispatch = useDispatch();
  const attendanceData = useSelector(state => state.attendance.attendanceData);

  const [disableStudentStateArray, setDisableStudentStateArray] = useState([]);
  const [allStudentStateArray, setAllStudentStateArray] = useState([]);
  const [isFirst, setIsFirst] = useState(true);

  const disableState = ["취업", "기초학력"];

  useEffect(() => {
    if (attendanceData.length) {
      const length = Object.values(attendanceData[0].state).filter(
        state => state !== null
      ).length;
      const newAllStudentStateArray = attendanceData.map(studentData => ({
        gradeClassNumber: studentData.gradeClassNumber,
        name: studentData.name,
        memoArr: Object.values(studentData.memo)
          .reverse()
          .slice(0, length)
          .reverse(),
        stateArr: Object.values(studentData.state)
          .reverse()
          .slice(0, length)
          .reverse()
      }));

      const newDisableStudentStateArray = newAllStudentStateArray.map(stdData =>
        !~disableState.findIndex(
          disableState => disableState === stdData.stateArr[0]
        )
          ? false
          : true
      );

      setAllStudentStateArray(newAllStudentStateArray);
      setDisableStudentStateArray(newDisableStudentStateArray);
    }
  }, [attendanceData]);

  useEffect(() => {
    if (isFirst) {
      if (attendanceData.length) {
        const length = Object.values(attendanceData[0].state).filter(
          state => state !== null
        ).length;
        const newAllStudentStateArray = attendanceData.map(studentData => ({
          gradeClassNumber: studentData.gradeClassNumber,
          name: studentData.name,
          memoArr: Object.values(studentData.memo)
            .reverse()
            .slice(0, length)
            .reverse(),
          stateArr: Object.values(studentData.state)
            .reverse()
            .slice(0, length)
            .reverse()
        }));

        dispatch(
          setCheckArrWithDisable(
            newAllStudentStateArray.map(stdData =>
              !~disableState.findIndex(
                disableState => disableState === stdData.stateArr[0]
              )
                ? false
                : "disabled"
            )
          )
        );
      }

      const newCheckArr = Array.from(
        { length: attendanceData ? attendanceData.length : 0 },
        () => false
      );

      if (attendanceData.length === 0) {
        dispatch(setCheckArrWithDisable(newCheckArr));
      }
      dispatch(setCheckArr(newCheckArr));
    }
  }, [dispatch, isFirst, attendanceData]);

  return (
    <S.ContainerContainer>
      {allStudentStateArray.length
        ? allStudentStateArray.map((data, mapIdx) => (
            <AttendanceRow
              key={data.name}
              index={mapIdx}
              attData={data}
              disableStudentStateArray={disableStudentStateArray}
              setAllStudentStateArray={setAllStudentStateArray}
            />
          ))
        : ""}
    </S.ContainerContainer>
  );
};

export default AttendanceRowContainer;
