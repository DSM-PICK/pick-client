import React, { useCallback, useEffect } from "react";
import * as S from "./styles";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getAttendanceStdDataSaga,
  getFloorDataSaga
} from "../../../../module/action/attendance";
import { getLocationState } from "../../../../lib/attendanceApi";

const AttendanceBody = props => {
  const { text, link, imgLink } = props;

  const floorDatas = useSelector(state => state.attendance.datas);

  const dispatch = useDispatch();

  const floorDataText = [
    "selfStudyData",
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
    (floor, floorData) => {
      dispatch(
        getAttendanceStdDataSaga({
          floor,
          priority: floorData[floorDataText[floor - 1]][0].priority
        })
      );
    },
    [dispatch]
  );

  const onAnchorClick = () => {
    if (link.length <= 17) return;
    getAttendanceStdDate(link.split("/")[3][5], floorDatas);
  };

  useEffect(() => {
    if (getLocationState() === "self-study" || getLocationState() === "club") {
      getFloorData(getLocationState(), props.text);
    }
  }, []);

  const isMain = location.pathname === "/main" ? "main" : "none";

  return (
    <S.Container
      as={Link}
      to={link}
      url={imgLink}
      text={text}
      ismain={isMain}
      onClick={() => onAnchorClick()}
    >
      {text}
    </S.Container>
  );
};

export default AttendanceBody;
