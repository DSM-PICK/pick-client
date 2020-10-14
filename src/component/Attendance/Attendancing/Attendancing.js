import React from "react";
import * as S from "./styles";
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";
import Body from "../../Body/Body";
import AttendanceNav from "./AttendanceNav/AttendanceNav";
import * as Data from "./Constant";
import { Link } from "react-router-dom";
import AttendanceSection from "./AttendanceSection/AttendanceSection";
import { useSelector } from "react-redux";

const getFloorText = floorName => {
  return floorName[floorName.length - 1] === "y"
    ? "자습실"
    : `${Number(floorName[floorName.length - 1])}층`;
};

const getFloorData = floor => {
  // console.log(floor);
  // console.log(Data.CLUB_FLOOR2);
  return floor === "2층"
    ? Data.CLUB_FLOOR2
    : floor === "3층"
    ? Data.CLUB_FLOOR3
    : Data.CLUB_FLOOR4;
};

const getDay = floorData => {
  let month = String(floorData.date).substring(0, 2);
  let day = String(floorData.date).substring(2, 4);
  if (month[0] == 0) {
    month = month[1];
  }
  if (day[0] == 0) {
    day = day[1];
  }
  return [month, day];
};

const Attendancing = ({ location }) => {
  const Floor = getFloorText(location.pathname.split("/")[3]);

  const floorData = getFloorData(Floor);

  const to = `/${location.pathname.split("/")[1]}/${
    location.pathname.split("/")[2]
  }`;

  const information = useSelector(state => state.attendance);
  const { date, dayOfWeek, teachers, datas } = information;
  const month = date.slice(0, 2);
  const day = date.slice(2, 4);

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

  teacherName = teacherName === null ? `"앗 오류!"` : teacherName;

  console.log(`floorDatas`);
  console.log(floorDatas);

  console.log(`location`);
  console.log(location);
  console.log(location.pathname);
  console.log(location.pathname.length);
  console.log(location.pathname[location.pathname.length - 1]);
  const index = location.pathname[location.pathname.length - 1];

  return (
    <S.Container>
      <Header>
        <S.HeaderWhere>
          <S.HeaderBackBtn as={Link} to={to} />
          <S.HeaderFloor>{Floor}</S.HeaderFloor>
        </S.HeaderWhere>
        <S.HeaderWhen>
          <S.HeaderMonthAndDay>{`${month}월 ${day}일`}</S.HeaderMonthAndDay>
          <S.HeaderDayOfTheWeek>{`${dayOfWeek}요일`}</S.HeaderDayOfTheWeek>
        </S.HeaderWhen>
        <S.HeaderWho>{`감독교사 ${teacherName}`}</S.HeaderWho>
      </Header>
      <Body state="attendance">
        {Floor !== "자습실" && <AttendanceNav floors={floorDatas} />}
        <AttendanceSection
          key={floorDatas[index].location}
          locations={floorDatas[index]}
        />
      </Body>
      <Footer />
    </S.Container>
  );
};

export default Attendancing;
