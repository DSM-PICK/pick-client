import React from "react";
import { useLocation } from "react-router-dom";
import StatsForClass from "../../component/Stats/StatsForClass/StatsForClass";

import { STATS_URL } from "../../component/Stats/StatsStaticData";

const StatsForClassContainer = () => {
  const location = useLocation();
  const statsForClassUrl = STATS_URL.statsForClass;
  let statsForClassTitle;

  try {
    statsForClassTitle = location.state.title;
  } catch (err) {
    window.location.href = "/t/stats/class";
  }

  const date = new Date();
  const [month, day, dayOfWeek] = [
    date.getMonth() + 1,
    date.getDate(),
    date.getDay()
  ];

  return (
    <StatsForClass
      link={statsForClassUrl}
      title={statsForClassTitle}
      month={month}
      day={day}
      dayOfWeek={dayOfWeek}
    />
  );
};

export default StatsForClassContainer;
