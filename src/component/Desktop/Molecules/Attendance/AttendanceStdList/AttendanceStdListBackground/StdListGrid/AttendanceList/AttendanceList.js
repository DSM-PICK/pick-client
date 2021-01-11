import React from "react";
import ItemBtn from "./ItemBtn/ItemBtn";
import * as S from "./styles";

const AttendanceList = props => {
  const { attendanceList, css } = props;

  return (
    <S.Container {...css}>
      {attendanceList.map(data => {
        console.log(data);
        return <ItemBtn key={data} text={data} />;
      })}
    </S.Container>
  );
};

export default AttendanceList;
