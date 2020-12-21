import React from "react";
import * as S from "./styles";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Header from "../../Header/Header";
import Body from "../../Body/Body";
import AttendanceNav from "./AttendanceNav/AttendanceNav";
import AttendanceSection from "./AttendanceSection/AttendanceSection";
import { BackIcon } from "../../../asset/index";

const getFloorText = splitPathnames => {
  const floor = splitPathnames[splitPathnames.length - 2]; // floorN 형식의 pathname. 자세한 건 노션 참조.
  const floorNum = floor[floor.length - 1];

  return floorNum != 1 ? `${floorNum}층` : "창조실";
};

const Attendancing = () => {
  const information = useSelector(state => state.attendance);
  const { date, dayOfWeek, teachers, datas } = information;

  const month = date.slice(0, 2);
  const day = date.slice(2, 4);

  const FloorText = getFloorText(location.pathname.split("/"));
  const backUrl = `/t/${location.pathname.split("/")[2]}/${
    location.pathname.split("/")[3]
  }`;

  const index = location.pathname[location.pathname.length - 1];

  const notFloor = "창조실";

  let floorDatas = [];
  let teacherName = ``;

  switch (FloorText) {
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
    case "창조실": {
      floorDatas = datas.firstFloorData;
      teacherName = teachers.selfStudyTeacherName;
      break;
    }
    default: {
      floorDatas = [];
      teacherName = ``;
      break;
    }
  }

  return (
    <S.Container>
      <Header>
        <S.HeaderWhere>
          <S.HeaderBackBtn as={Link} to={backUrl} url={BackIcon} />
          <S.HeaderFloor>{FloorText}</S.HeaderFloor>
        </S.HeaderWhere>
        <S.HeaderWhen>
          <S.HeaderMonthAndDay>{`${month}월 ${day}일`}</S.HeaderMonthAndDay>
          <S.HeaderDayOfTheWeek>{`${dayOfWeek}요일`}</S.HeaderDayOfTheWeek>
        </S.HeaderWhen>
        <S.HeaderWho>
          {!!teacherName ? `감독교사 ${teacherName}` : ``}
        </S.HeaderWho>
      </Header>
      <Body mode="attendance">
        {notFloor !== FloorText && (
          <AttendanceNav floors={floorDatas} Floor={FloorText} />
        )}
        <AttendanceSection
          key={floorDatas[index]}
          locations={floorDatas[index]}
        />
      </Body>
    </S.Container>
  );
};

export default Attendancing;
