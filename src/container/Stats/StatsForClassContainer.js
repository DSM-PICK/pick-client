import React from "react";
import StatsForClass from "../../component/Stats/StatsForClass/StatsForClass";

import {
  STATS_PAGE_TITLE,
  STATS_URL
} from "../../component/Stats/StatsStaticData";

const StatsForClassContainer = () => {
  const statsForClassUrl = STATS_URL.statsForClass;
  const statsForClassTitle = STATS_PAGE_TITLE.statsForClass;

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
