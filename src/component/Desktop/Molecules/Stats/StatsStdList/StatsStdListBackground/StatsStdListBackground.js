import React from "react";
import * as S from "./style";
import SStdListHeader from "./SStdListHeader/SStdListHeader";
import DSStdListBodyContainer from "../../../../../../container/Desktop/Stats/DSStdListBodyContainer";
import { useSelector } from "react-redux";
import NoScheduleWrap from "../../../../../NoScheduleWrap/NoScheduleWrap";
import { NonScheduleGif } from "../../../../../../asset/Desktop";

const StatsStdListBackground = () => {
  const todaySchedule = useSelector(state => state.schedule.todaySchedule);

  const scheduleArr = ["self-study", "after-school", "club"];
  const isNonSchedule = !~scheduleArr.findIndex(
    schedule => schedule === todaySchedule
  );

  if (isNonSchedule) {
    return (
      <S.Container>
        <NoScheduleWrap
          text="선택하신 날은 데이터가 없어요..."
          gif={NonScheduleGif}
          gifSize="53% 40% / 60%"
          textPadding="240px 0"
        />
      </S.Container>
    );
  }

  return (
    <S.Container>
      <SStdListHeader />
      <DSStdListBodyContainer />
    </S.Container>
  );
};

export default StatsStdListBackground;
