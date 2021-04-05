import React, { useCallback, useEffect } from "react";
import * as S from "./styles";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getFloorDataSaga,
  getAttendanceStdDataSaga,
  setTodaySchedule
} from "../../../../module/action/attendance";
import {
  getLocationState,
  makeDate2Digit
} from "../../../../lib/attendanceApi";
import { requestGetApiWithAccessToken } from "../../../../lib/requestApi";
import { ATTENDANCE } from "../../../../lib/requestUrl";

const AttendanceBody = props => {
  const { text, link, imgLink } = props;

  const todaySchedule = useSelector(state => state.attendance.todaySchedule);
  const floorDatas = useSelector(state => state.attendance.datas);

  const dispatch = useDispatch();

  const floorDataText = [
    "firstFloorData",
    "secondFloorData",
    "thirdFloorData",
    "forthFloorData"
  ];

  const getFloorData = useCallback(
    (locationState, text) => {
      dispatch(getFloorDataSaga({ locationState, text }));
    },
    [dispatch]
  );

  const getAttendanceStdDate = useCallback(
    (floor, floorData, clickE, todaySchedule) => {
      try {
        const floorIndex = !!isNaN(floor) ? 0 : Number(floor) - 1;
        dispatch(
          getAttendanceStdDataSaga({
            floor: floorIndex + 1,
            priority: floorData[floorDataText[floorIndex]][0].priority,
            todaySchedule
          })
        );
      } catch (err) {
        alert(`${text}의 데이터가 없습니다.`);
        clickE.preventDefault();
      }
    },
    [dispatch]
  );

  const onAnchorClick = clickEvent => {
    if (!link.split("/")[4]) return;
    getAttendanceStdDate(
      link.split("/")[4][5],
      floorDatas,
      clickEvent,
      todaySchedule
    );
  };

  const data = async () => {
    const date = new Date();
    const dateString = `${date.getFullYear()}-${makeDate2Digit(
      date.getMonth() + 1
    )}-${makeDate2Digit(date.getDate())}`;
    const res = await requestGetApiWithAccessToken(
      ATTENDANCE.ACTIVITY_BY_DATE_URL(dateString)
    );

    dispatch(setTodaySchedule(res.data.schedule));

    console.log(res.data.schedule);

    if (getLocationState() === "self-study" || getLocationState() === "club") {
      getFloorData(res.data.schedule, text);
    }
  };

  useEffect(() => {
    data();
  }, []);

  const isMain = location.pathname === "/t/main" ? "main" : "none";

  return (
    <S.Container
      as={Link}
      to={link}
      url={imgLink}
      text={text}
      ismain={isMain}
      onClick={clickE => onAnchorClick(clickE)}
    >
      {text}
    </S.Container>
  );
};

export default AttendanceBody;
