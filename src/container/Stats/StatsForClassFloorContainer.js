import React from "react";
import StatsForClassFloor from "../../component/Stats/StatsForClassFloor/StatsForClassFloor";
import {
  STATS_PAGE_TITLE,
  STATS_URL
} from "../../component/Stats/StatsStaticData";

const StatsForClassContainer = () => {
  const statsMainUrl = STATS_URL.statsMain;
  const statsForClassTitle = STATS_PAGE_TITLE.statsForClass;

  return <StatsForClassFloor link={statsMainUrl} title={statsForClassTitle} />;
};

export default StatsForClassContainer;
