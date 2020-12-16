import React from "react";
import Stats from "../../component/Stats/StatsMain/Stats";
import { STATS_PAGE_TITLE } from "../../component/Stats/StatsStaticData";

const StatsMainContainer = () => {
  const statsMainTitle = STATS_PAGE_TITLE.statsMain;

  return <Stats title={statsMainTitle} />;
};

export default StatsMainContainer;
