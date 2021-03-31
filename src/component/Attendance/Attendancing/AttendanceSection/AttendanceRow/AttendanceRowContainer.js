import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCheckArr } from "../../../../../module/action/attendance";
import AttendanceRow from "./AttendanceRow";
import * as S from "./styles";

const AttendanceRowContainer = () => {
  const dispatch = useDispatch();
  const attendanceData = useSelector(state => state.attendance.attendanceData);

  const [disableStudentStateArray, setDisableStudentStateArray] = useState([]);
  const [checkArrWithoutDisable, setCheckArrWithoutDisable] = useState([]);
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

      const newCheckArrWithoutDisable = newAllStudentStateArray.filter(
        stdData =>
          !~disableState.findIndex(
            disableState => disableState === stdData.stateArr[0]
          )
      );

      // newAllStudentStateArray.map(stdData => ~disableState.findIndex(disableState => disableState === stdData.memoArr[0]) ? true : false)

      const newDisableStudentStateArray = newAllStudentStateArray.map(stdData =>
        !~disableState.findIndex(
          disableState => disableState === stdData.stateArr[0]
        )
          ? false
          : true
      );

      setAllStudentStateArray(newAllStudentStateArray);
      setCheckArrWithoutDisable(newCheckArrWithoutDisable);
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

        console.log(
          attendanceData,
          newAllStudentStateArray,
          newAllStudentStateArray.map(stdData =>
            !~disableState.findIndex(
              disableState => disableState === stdData.stateArr[0]
            )
              ? false
              : "disabled"
          )
        );
      }

      const newCheckArr = Array.from(
        { length: attendanceData ? attendanceData.length : 0 },
        () => false
      );

      dispatch(setCheckArr(newCheckArr));
    }
  }, [isFirst, attendanceData]);

  return (
    <S.ContainerContainer>
      {allStudentStateArray.length
        ? allStudentStateArray.map((data, mapIdx) => (
            <AttendanceRow
              key={data.name}
              index={mapIdx}
              attData={data}
              checkArrWithoutDisable={checkArrWithoutDisable}
              disableStudentStateArray={disableStudentStateArray}
            />
          ))
        : ""}
    </S.ContainerContainer>
  );
};

export default AttendanceRowContainer;
