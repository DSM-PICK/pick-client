import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCheckArr } from "../../../../../module/action/attendance";
import AttendanceRow from "./AttendanceRow";
import * as S from "./styles";

const AttendanceRowContainer = () => {
  const dispatch = useDispatch();
  const attendanceData = useSelector(state => state.attendance.attendanceData);

  const [allStudentStateArray, setAllStudentStateArray] = useState([]);
  const [isFirst, setIsFirst] = useState(true);

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

      setAllStudentStateArray(newAllStudentStateArray);
    }
  }, [attendanceData]);

  useEffect(() => {
    if (isFirst) {
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
              setAllStudentStateArray={setAllStudentStateArray}
            />
          ))
        : ""}
    </S.ContainerContainer>
  );
};

export default AttendanceRowContainer;
