import React from "react";
import { Link } from "react-router-dom";
import * as S from "./styles";

const AttendanceStatsBtnWrap = props => {
  const { data } = props;
  const { priority, clubName, clubMembers } = data;

  return (
    <S.Container as={Link} to={priority}>
      <S.Header>{clubName}</S.Header>
      <S.Wrap>
        {clubMembers.map(clubMember => (
          <S.AttendanceStatsText key={clubMember.text}>
            {clubMember.text}
          </S.AttendanceStatsText>
        ))}
      </S.Wrap>
    </S.Container>
  );
};

export default AttendanceStatsBtnWrap;
