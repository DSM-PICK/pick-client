import React from "react";
import CurrentWrap from "./CurrentWrap/CurrentWrap";
import * as S from "./styles";

const AttendanceCurrentBackground = () => {
  const STATIC_DONE_ARR = [
    {
      title: "1학년",
      data: ["1학년 1반", "1학년 2반", "1학년 3반", "1학년 4반"]
    },
    {
      title: "2학년",
      data: ["2학년 1반", "2학년 2반", "2학년 3반", "2학년 4반"]
    },
    {
      title: "3학년",
      data: ["3학년 1반", "3학년 2반", "3학년 3반", "3학년 4반"]
    },
    {
      title: "기타",
      data: ["창조실"]
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
