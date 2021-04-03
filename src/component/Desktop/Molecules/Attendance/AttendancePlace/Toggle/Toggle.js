import React from "react";
import { useSelector } from "react-redux";
import * as S from "./styles";

const Toggle = props => {
  const todaySchedule = useSelector(state => state.schedule.todaySchedule);

  const scheduleArr = ["self-study", "after-school", "club"];
  const isNonSchedule = !~scheduleArr.findIndex(
    schedule => schedule === todaySchedule
  );

  const { selectSchedule, onClick } = props;
  const selectScheduleArr = ["교실자습", "전공동아리"];
  const schedule =
    selectSchedule === selectScheduleArr[0]
      ? selectScheduleArr[1]
      : selectScheduleArr[0];

  return (
    <S.Container>
      <S.Toggle
        onClick={isNonSchedule ? void "" : () => onClick(schedule)}
        isNonSchedule={isNonSchedule}
      >
        <S.ToggleItem
          toggle={selectSchedule === selectScheduleArr[0]}
          isNonSchedule={isNonSchedule}
        />
        {selectScheduleArr.map(scheduleItem => (
          <S.ToggleText
            key={scheduleItem}
            toggle={selectSchedule === scheduleItem}
          >
            {scheduleItem}
          </S.ToggleText>
        ))}
      </S.Toggle>
    </S.Container>
  );
};

export default React.memo(Toggle);
