import React, { useCallback, useEffect, useState } from "react";
import * as S from "./styles";
import AttendanceRowTop from "./AttendanceRowTop/AttendanceRowTop";
import AttendanceRow from "./AttendanceRow/AttendanceRow";
import * as Data from "../Constant";
import { getLocationState } from "../../../../lib/attendanceAPI";
import { useDispatch } from "react-redux";
import {
  getAttendanceStdDataSaga,
  postAttendanceStdDataSaga
} from "../../../../module/action/attendance";

const getClassLocation = locations => {
  return locations[location.pathname[location.pathname.length - 1]];
};

const getClassData = () => {
  return Number(location.pathname[location.pathname.length - 1]) % 2 === 0
    ? Data.CLUB_FLOOR4_0
    : Data.CLUB_FLOOR4_1;
};

const AttendanceSection = props => {
  const { locations } = props;
  const [classData, setClassData] = useState(getClassData());

  const classLocation = getClassLocation(locations);

  console.log("classLocation");
  console.log(classLocation);

  const onChangeRow = data => {
    setClassData(data);
  };

  const isSelfStudy = getLocationState() === "class";

  // const dispatch = useDispatch();
  //
  // useEffect(() => {
  //   // useCallback(() => {
  //   console.log(`getAttendanceStdDataSaga`);
  //   dispatch(getAttendanceStdDataSaga({ floor: 3, priority: 4 }));
  //   // }, [dispatch]);
  // }, []);
  //
  // useEffect(() => {
  //   console.log(`postAttendanceStdDataSaga`);
  //   dispatch(
  //     postAttendanceStdDataSaga({ number: 2415, period: 8, state: "출석" })
  //   );
  // }, []);

  return (
    <S.Container>
      {!isSelfStudy && (
        <S.Article>
          <S.Name>{classData.name}</S.Name>
          <S.Location>{classLocation.location}</S.Location>
          <S.Head>{`부장 : ${classData.head}`}</S.Head>
        </S.Article>
      )}
      {isSelfStudy && (
        <S.Article>
          <S.Location location="자습실">{`자습실`}</S.Location>
        </S.Article>
      )}
      <AttendanceRowTop />
      <S.Attendance>
        {classData.attendances.map(attendance => (
          <AttendanceRow
            key={attendance.sequence}
            attendance={attendance}
            classData={classData}
            onChangeRow={onChangeRow}
          />
        ))}
      </S.Attendance>
    </S.Container>
  );
};

export default AttendanceSection;
