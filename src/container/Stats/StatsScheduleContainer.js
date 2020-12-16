import React from "react";
import StatsSchedule from "../../component/Stats/StatsSchedule/StatsSchedule";
import {
  STATS_PAGE_TITLE,
  STATS_URL
} from "../../component/Stats/StatsStaticData";

const StatsScheduleContainer = () => {
  const statsScheduleUrl = STATS_URL.statsSchedule;
  const statsScheduleTitle = STATS_PAGE_TITLE.statsSchedule;

  const date = new Date();
  const [month, day, dayOfWeek] = [
    date.getMonth() + 1,
    date.getDate(),
    date.getDay()
  ];

  return (
    <StatsSchedule
      link={statsScheduleUrl}
      title={statsScheduleTitle}
      month={month}
      day={day}
      dayOfWeek={dayOfWeek}
    />
  );
};

export default StatsScheduleContainer;
