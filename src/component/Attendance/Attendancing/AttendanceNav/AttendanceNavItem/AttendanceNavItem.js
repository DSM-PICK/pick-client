import React, { useCallback } from "react";
import * as S from "./styles";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getAttendanceStdDataSaga } from "../../../../../module/action/attendance";

const AttendanceNavItem = props => {
  const { data, floor, index, priority } = props;
  const { doneAtt } = props;

  const dispatch = useDispatch();

  const dataLoad = useCallback(() => {
    dispatch(getAttendanceStdDataSaga({ floor, priority }));
  }, [dispatch]);

  const to = `/${location.pathname.split("/")[1]}/${
    location.pathname.split("/")[2]
  }/${location.pathname.split("/")[3]}/${
    location.pathname.split("/")[4]
  }/${index}`;

  return (
    <S.Container
      as={NavLink}
      to={`${to}`}
      activeStyle={S.activeStyle}
      done={data.done}
      onClick={() => {
        dataLoad();
        doneAtt(data.location);
      }}
    >
      {data.location}
    </S.Container>
  );
};

export default AttendanceNavItem;
