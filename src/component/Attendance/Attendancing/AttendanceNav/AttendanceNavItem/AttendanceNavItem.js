import React from "react";
import * as S from "./styles";
import { NavLink } from "react-router-dom";

const AttendanceNavItem = props => {
  const { data, index } = props;
  const { doneAtt } = props;

  const to = `/${location.pathname.split("/")[1]}/${
    location.pathname.split("/")[2]
  }/${location.pathname.split("/")[3]}/${index}`;

  return (
    <S.Container
      as={NavLink}
      to={`${to}`}
      activeStyle={S.activeStyle}
      done={data.done}
      onClick={() => {
        doneAtt(data.location);
      }}
    >
      {data.location}
    </S.Container>
  );
};

export default AttendanceNavItem;
