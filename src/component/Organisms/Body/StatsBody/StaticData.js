import { STATS_PAGE_TITLE, STATS_URL } from "../../../Stats/StatsStaticData";

export const StatsMainBodyStaticData = [
  {
    link: STATS_URL.statsSchedule,
    text: STATS_PAGE_TITLE.statsSchedule
  },
  {
    link: STATS_URL.statsForClass,
    text: STATS_PAGE_TITLE.statsForClass + "(for 담임선생님)"
  },
  {
    link: STATS_URL.statsGraph,
    text: STATS_PAGE_TITLE.statsGraph
  }
];

export const StatsForClassBodyStaticData = [
  {
    link: STATS_URL.statsForClass + "/1",
    text: "1학년"
  },
  {
    link: STATS_URL.statsForClass + "/1",
    text: "2학년"
  },
  {
    link: STATS_URL.statsForClass + "/1",
    text: "3학년"
  }
];
