import React from "react";
import * as S from "./style";

const AttendanceCurrentGoOutBackground = () => {
  const floorClassData = [
    {
      title: "4층",
      floorData: ["1101 정우영", "1102 기무라", "1103 다이웅", "1104 안희명"]
    },
    {
      title: "3층",
      floorData: ["2101 정우영", "2102 기무라", "2103 다이웅", "2104 안희명"]
    },
    {
      title: "2층",
      floorData: ["3101 정우영", "3102 기무라", "3103 다이웅", "3104 안희명"]
    },
    {
      title: "기타",
      floorData: []
    }
  ];

  return (
    <S.Container>
      {floorClassData.map(data => (
        <S.FloorWrap>
          <S.FloorTitle key={data.title}>{data.title}</S.FloorTitle>
          <S.FloorDataWrap count={Math.ceil(data.floorData.length / 3)}>
            {data.floorData.map(text => (
              <S.FloorDataText key={text}>{text}</S.FloorDataText>
            ))}
          </S.FloorDataWrap>
        </S.FloorWrap>
      ))}
    </S.Container>
  );
};

export default AttendanceCurrentGoOutBackground;
