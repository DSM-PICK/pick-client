import React from "react";
import StatsScheduleFloor from "../../component/Stats/StatsScheduleFloor/StatsScheduleFloor";
import {
  STATS_PAGE_TITLE,
  STATS_URL
} from "../../component/Stats/StatsStaticData";

const StatsScheduleFloorContainer = () => {
  const statsMainUrl = STATS_URL.statsMain;
  const statsScheduleTitle = STATS_PAGE_TITLE.statsSchedule;

  return <StatsScheduleFloor link={statsMainUrl} title={statsScheduleTitle} />;
};

export default StatsScheduleFloorContainer;
