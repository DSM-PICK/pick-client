import React from "react";
import { useSelector } from "react-redux";
import * as S from "./style";

const AttendanceCurrentGoOutBackground = () => {
  const floorClassData = useSelector(state => state.dAttendance.floorClassData);

  const floorDataArr = Object.values(floorClassData).reverse();
  const floorTitleStaticData = ["4층", "3층", "2층"];

  return (
    <S.Container>
      {floorDataArr.map((dataArr, mapIdx) => (
        <S.FloorWrap key={mapIdx}>
          <S.FloorTitle key={floorTitleStaticData[mapIdx]}>
            {floorTitleStaticData[mapIdx]}
          </S.FloorTitle>
          <S.FloorDataWrap count={Math.ceil(dataArr.length / 3)}>
            {dataArr.map(data => (
              <S.FloorDataText
                key={data.studentNumber}
              >{`${data.studentNumber} ${data.studentName}`}</S.FloorDataText>
            ))}
          </S.FloorDataWrap>
        </S.FloorWrap>
      ))}
    </S.Container>
  );
};

export default AttendanceCurrentGoOutBackground;
