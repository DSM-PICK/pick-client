import React from "react";
import StatsRecordBackground from "../../../component/Desktop/Molecules/Stats/StatsRecord/StatsRecordBackground/StatsRecordBackground";

const DSRecordBackgroundContainer = () => {
  const recordData = [
    {
      title: "1학년"
    },
    {
      title: "2학년"
    },
    {
      title: "3학년"
    }
  ];

  return <StatsRecordBackground recordData={recordData} />;
};

export default DSRecordBackgroundContainer;
