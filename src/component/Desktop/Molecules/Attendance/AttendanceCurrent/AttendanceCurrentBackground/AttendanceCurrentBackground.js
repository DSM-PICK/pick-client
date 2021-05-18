import React from "react";
import CurrentWrap from "./CurrentWrap/CurrentWrap";
import * as S from "./styles";

const AttendanceCurrentBackground = () => {
  const STATIC_DONE_ARR = [
    {
      title: "1학년",
      floorArr: [
        { name: "1학년 1반", done: true },
        { name: "1학년 2반", done: false },
        { name: "1학년 3반", done: false },
        { name: "1학년 4반", done: false }
      ]
    },
    {
      title: "2학년",
      floorArr: [
        { name: "2학년 1반", done: true },
        { name: "2학년 2반", done: false },
        { name: "2학년 3반", done: false },
        { name: "2학년 4반", done: false }
      ]
    },
    {
      title: "3학년",
      floorArr: [
        { name: "3학년 1반", done: true },
        { name: "3학년 2반", done: false },
        { name: "3학년 3반", done: false },
        { name: "3학년 4반", done: false }
      ]
    },
    {
      title: "기타",
      floorArr: [{ name: "창조실", done: true }]
    }
  ];

  return (
    <S.Container>
      {STATIC_DONE_ARR.map(floorData => (
        <CurrentWrap key={floorData.title} floorData={floorData} />
      ))}
    </S.Container>
  );
};

export default AttendanceCurrentBackground;
