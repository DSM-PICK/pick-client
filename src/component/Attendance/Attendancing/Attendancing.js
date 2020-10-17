import React from "react";
import * as S from "./styles";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";
import Body from "../../Body/Body";
import AttendanceNav from "./AttendanceNav/AttendanceNav";
import AttendanceSection from "./AttendanceSection/AttendanceSection";
import { BackIcon } from "../../../asset/index";

const getFloorText = floorName => {
  return floorName[floorName.length - 1] === "y"
    ? "자습실"
    : `${Number(floorName[floorName.length - 1])}층`;
};

const Attendancing = () => {
  const information = useSelector(state => state.attendance);
  const { date, dayOfWeek, teachers, datas, attendanceData } = information;
  const month = date.slice(0, 2);
  const day = date.slice(2, 4);

  const Floor = getFloorText(location.pathname.split("/")[3]);
  const backUrl = `/${location.pathname.split("/")[1]}/${
    location.pathname.split("/")[2]
  }`;

  let floorDatas = [];
  let teacherName = `"앗 오류!"`;

  switch (Floor) {
    case "4층": {
      floorDatas = datas.forthFloorData;
      teacherName = teachers.forthTeacherName;
      break;
    }
    case "3층": {
      floorDatas = datas.thirdFloorData;
      teacherName = teachers.thirdTeacherName;
      break;
    }
    case "2층": {
      floorDatas = datas.secondFloorData;
      teacherName = teachers.secondTeacherName;
      break;
    }
    case "자습실": {
      floorDatas = datas.selfStudyData;
      teacherName = teachers.selfStudyTeacherName;
      break;
    }
    default: {
      floorDatas = [];
      teacherName = `"앗 오류!`;
      break;
    }
  }

  console.log(`attendanceData`);
  console.log(attendanceData);

  teacherName = !teacherName ? `"앗 오류!"` : teacherName;

  const index = window.location.pathname[window.location.pathname.length - 1];

  return (
    <S.Container>
      <Header>
        <S.HeaderWhere>
          <S.HeaderBackBtn as={Link} to={backUrl} url={BackIcon} />
          <S.HeaderFloor>{Floor}</S.HeaderFloor>
        </S.HeaderWhere>
        <S.HeaderWhen>
          <S.HeaderMonthAndDay>{`${month}월 ${day}일`}</S.HeaderMonthAndDay>
          <S.HeaderDayOfTheWeek>{`${dayOfWeek}요일`}</S.HeaderDayOfTheWeek>
        </S.HeaderWhen>
        <S.HeaderWho>{`감독교사 ${teacherName}`}</S.HeaderWho>
      </Header>
      <Body state="attendance">
        {Floor !== "자습실" && (
          <AttendanceNav floors={floorDatas} Floor={Floor} />
        )}
        <AttendanceSection
          key={floorDatas[index]}
          locations={floorDatas[index]}
        />
      </Body>
      <Footer />
    </S.Container>
  );
};

export default Attendancing;
