import React, { useCallback } from "react";
import { setChangeMode } from "../../../module/action/schedule";
import { useDispatch, useSelector } from "react-redux";
import * as S from "./styles";

const DScheduleChange = () => {
  const dispatch = useDispatch();
  const isScheduleChangeMode = useSelector(
    store => store.schedule.isChangeMode
  );
  const changeIsScheduleChangeMode = useCallback(() => {
    if (isScheduleChangeMode) {
    }

    dispatch(setChangeMode(!isScheduleChangeMode));
  }, [isScheduleChangeMode]);

  return (
    <S.Container>
      <div>일정 교체</div>
      <S.ScheduleChangeBtn
        isCancelMode={isScheduleChangeMode}
        onClick={changeIsScheduleChangeMode}
      >
        {isScheduleChangeMode ? "일정 교체 취소" : "자습감독 일정 교체"}
      </S.ScheduleChangeBtn>
    </S.Container>
  );
};

export default DScheduleChange;
