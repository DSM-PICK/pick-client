import React from "react";
import StatsRecordBackground from "../../../component/Desktop/Molecules/Stats/StatsRecord/StatsRecordBackground/StatsRecordBackground";

const DSRecordBackgroundContainer = () => {
  const firstData = {
    fieldExperience: 1,
    homeComing: 2,
    move: 3,
    outing: 4,
    truancy: 5
  };
  const secondData = {
    fieldExperience: 2,
    homeComing: 2,
    move: 2,
    outing: 2,
    truancy: 2
  };
  const thirdData = {
    fieldExperience: 3,
    homeComing: 3,
    move: 3,
    outing: 3,
    truancy: 3
  };

  const recordDataArr = [
    { title: "1학년", ...firstData },
    { title: "2학년", ...secondData },
    { title: "3학년", ...thirdData }
  ];

  return <StatsRecordBackground recordDataArr={recordDataArr} />;
};

export default DSRecordBackgroundContainer;
