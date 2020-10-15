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
      dispatch(getAttendanceStdDataSaga({ floor, priority: 0 }));
    },
    [dispatch]
  );

  const floor = link.split("/")[3][link.split("/")[3].length - 1];

  useEffect(() => {
    if (getLocationState() === "class" || getLocationState() === "club") {
      getFloorData(props.text);
    }
  }, []);

  return (
    <S.Container
      as={Link}
      to={link}
      url={imgLink}
      text={text}
      onClick={() => getAttendanceStdDate(floor)}
    >
      {text}
    </S.Container>
  );
};

export default AttendanceBody;
