import React from "react";
import StatsForClass from "../../component/Stats/StatsForClass/StatsForClass";

import {
  STATS_PAGE_TITLE,
  STATS_URL
} from "../../component/Stats/StatsStaticData";

const StatsForClassContainer = () => {
  const statsMainUrl = STATS_URL.statsMain;
  const statsForClassTitle = STATS_PAGE_TITLE.statsForClass;

  const date = new Date();
  const [month, day, dayOfWeek] = [
    date.getMonth() + 1,
    date.getDate(),
    date.getDay()
  ];

  return (
    <StatsForClass
      link={statsMainUrl}
      title={statsForClassTitle}
      month={month}
      day={day}
      dayOfWeek={dayOfWeek}
    />
  );
};

export default StatsForClassContainer;
