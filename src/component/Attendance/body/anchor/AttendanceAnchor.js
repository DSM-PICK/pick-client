import React, { useCallback, useEffect } from "react";
import * as S from "./styles";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  getFloorDataSaga,
  getClubFloorDataSaga,
  getSelfStudyFloorDataSaga
} from "../../../../module/action/attendance";
import { getLocationState } from "../../../../lib/attendanceAPI";

const AttendanceBody = props => {
  const { text, link, imgLink } = props;

  const dispatch = useDispatch();

  const getFloorData = useCallback((text) => {
    dispatch(getFloorDataSaga(text));
  }, [dispatch]);

  useEffect(() => {
    if(getLocationState() === 'class' || getLocationState() === 'club') {
      getFloorData(props.text);
    }
  }, [])

  return (
    <S.Container
      as={Link}
      to={link}
      url={imgLink}
      text={text}
    >
      {text}
    </S.Container>
  );
};

export default AttendanceBody;
