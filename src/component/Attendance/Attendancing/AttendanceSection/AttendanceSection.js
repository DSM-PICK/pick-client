import React from "react";
import * as S from "./styles";
import AttendanceRowTop from "./AttendanceRowTop/AttendanceRowTop";
import AttendanceRow from "./AttendanceRow/AttendanceRow";
import { useSelector } from "react-redux";
import { getLocationState } from "../../../../lib/attendanceApi";

const AttendanceSection = props => {
  try {
    const { location, name: clubName } = props.locations;

    const information = useSelector(state => state.attendance);
    const { clubHead, attendanceData } = information;

    const isSevenNull =
      !!Object.keys(attendanceData).length &&
      attendanceData[0].state.seven === null;

    return (
      <S.Container>
        {clubName !== "자습" ? (
          <S.Article>
            <S.Name>{clubName}</S.Name>
            {clubName !== location && <S.Location>{location}</S.Location>}
            {!!clubHead && <S.Head>{`부장 : ${clubHead}`}</S.Head>}
          </S.Article>
        ) : (
          <S.Article>
            <S.Location location="자습실">{`자습실`}</S.Location>
          </S.Article>
        )}
        <AttendanceRowTop isSevenNull={isSevenNull} />
        <S.Attendance>
          {!!Object.keys(attendanceData).length &&
            attendanceData.map((attendance, index) => (
              <AttendanceRow
                key={attendance.gradeClassNumber}
                index={index}
                attendance={attendance}
              />
            ))}
        </S.Attendance>
      </S.Container>
    );
  } catch (err) {
    getLocationState() === "club"
      ? (window.location.href = "/attendance/club")
      : (window.location.href = "/attendance/class");
  }
};

export default AttendanceSection;
