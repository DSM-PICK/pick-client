import React from "react";
import * as S from "./styles";
import AttendanceRowTop from "./AttendanceRowTop/AttendanceRowTop";
import AttendanceRow from "./AttendanceRow/AttendanceRow";
import * as Data from "../Constant";
import { getLocationState } from "../../../../lib/attendanceAPI";
import { useSelector } from "react-redux";

const getClassData = () => {
  return Number(location.pathname[location.pathname.length - 1]) % 2 === 0
    ? Data.CLUB_FLOOR4_0
    : Data.CLUB_FLOOR4_1;
};

const getFloorText = floorName => {
  return floorName[floorName.length - 1] !== "y"
    ? `${Number(floorName[floorName.length - 1])}층`
    : "자습실";
};

const AttendanceSection = props => {
  !props.locations
    ? getLocationState() === "club"
      ? (window.location.href = "/attendance/club")
      : (window.location.href = "/attendance/class")
    : "";

  const { locations } = props;
  const { location, name: clubName } = locations;

  const information = useSelector(state => state.attendance);
  const { clubHead, attendanceData } = information;

  const isSelfStudy = getLocationState() === "class";

  console.log(`locations`);
  console.log(locations);
  console.log(`information`);
  console.log(information);

  const isSevenNull =
    !!Object.keys(attendanceData).length &&
    attendanceData[0].state.seven === null;

  return (
    <S.Container>
      <S.Article>
        <S.Name>{clubName}</S.Name>
        <S.Location>{location}</S.Location>
        <S.Head>{`부장 : ${clubHead}`}</S.Head>
      </S.Article>

      {/* {isSelfStudy && (
        <S.Article>
          <S.Location location="자습실">{`자습실`}</S.Location>
        </S.Article>
      )} */}
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
};

export default AttendanceSection;
