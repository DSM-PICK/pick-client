import React, { useCallback, useEffect } from "react";
import * as S from "./styles";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  getAttendanceStdDataSaga,
  getFloorDataSaga
} from "../../../../module/action/attendance";
import { getLocationState } from "../../../../lib/attendanceAPI";

const AttendanceBody = props => {
  const { text, link, imgLink } = props;

  const dispatch = useDispatch();

  const getFloorData = useCallback(
    text => {
      dispatch(getFloorDataSaga(text));
    },
    [dispatch]
  );
  const getAttendanceStdDate = useCallback(
    floor => {
      dispatch(getAttendanceStdDataSaga({ floor, priority: 2 }));
    },
    [dispatch]
  );

  const onAnchorClick = () => {
    if (link.length <= 17) return;
    getAttendanceStdDate(link.split("/")[3][5]);
  };

  useEffect(() => {
    if (getLocationState() === "class" || getLocationState() === "club") {
      getFloorData(props.text);
    }
  }, []);

  const isMain = () => {
    return location.pathname === "/main" ? "main" : "none";
  };

  return (
    <S.Container
      as={Link}
      to={link}
      url={imgLink}
      text={text}
      ismain={isMain()}
      onClick={() => onAnchorClick()}
    >
      {text}
    </S.Container>
  );
};

export default AttendanceBody;
