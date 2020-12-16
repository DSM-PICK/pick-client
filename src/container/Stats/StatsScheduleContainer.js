import React from "react";
import StatsSchedule from "../../component/Stats/StatsSchedule/StatsSchedule";
import {
  STATS_PAGE_TITLE,
  STATS_URL
} from "../../component/Stats/StatsStaticData";

const StatsScheduleContainer = () => {
  const statsMainUrl = STATS_URL.statsMain;
  const statsScheduleTitle = STATS_PAGE_TITLE.statsSchedule;

  return <StatsSchedule link={statsMainUrl} title={statsScheduleTitle} />;
};

export default StatsScheduleContainer;
