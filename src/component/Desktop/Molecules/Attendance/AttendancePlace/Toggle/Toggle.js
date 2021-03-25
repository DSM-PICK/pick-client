import React from "react";
import * as S from "./styles";

const Toggle = props => {
  const { selectSchedule, onClick } = props;
  const selectScheduleArr = ["교실자습", "전공동아리"];
  const schedule =
    selectSchedule === selectScheduleArr[0]
      ? selectScheduleArr[1]
      : selectScheduleArr[0];

  return (
    <S.Container>
      <S.Toggle onClick={() => onClick(schedule)}>
        <S.ToggleItem toggle={selectSchedule === selectScheduleArr[0]} />
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
