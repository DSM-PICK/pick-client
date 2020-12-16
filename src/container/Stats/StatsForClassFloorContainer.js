import React from "react";
import StatsForClass from "../../component/Stats/StatsForClass/StatsForClass";
import {
  STATS_PAGE_TITLE,
  STATS_URL
} from "../../component/Stats/StatsStaticData";

const StatsForClassContainer = () => {
  const statsMainUrl = STATS_URL.statsMain;
  const statsForClassTitle = STATS_PAGE_TITLE.statsForClass;

  return <StatsForClass link={statsMainUrl} title={statsForClassTitle} />;
};

export default StatsForClassContainer;
