import React from "react";
import { useLocation } from "react-router-dom";
import StatsSchedule from "../../component/Stats/StatsSchedule/StatsSchedule";
import { STATS_URL } from "../../component/Stats/StatsStaticData";

const StatsScheduleContainer = () => {
  const location = useLocation();
  const statsScheduleUrl = STATS_URL.statsSchedule;
  let statsScheduleTitle;

  try {
    statsScheduleTitle = location.state.title;
  } catch (err) {
    window.location.href = "/t/stats/schedule";
  }

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
