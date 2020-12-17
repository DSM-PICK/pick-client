import React from "react";
import * as S from "./styles";
import HeaderFullOptions from "../../Organisms/Header/HeaderFullOptions/HeaderFullOptions";

const StatsSchedule = props => {
  const { link, title, month, day, dayOfWeek } = props;

  return (
    <S.Container>
      <HeaderFullOptions
        link={link}
        title={title}
        month={month}
        day={day}
        dayOfWeek={dayOfWeek}
      />
    </S.Container>
  );
};

export default StatsSchedule;
