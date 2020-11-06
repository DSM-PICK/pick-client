import React, { useCallback, useEffect } from "react";
import * as S from "../styles";
import HiddenMenuItem from "./HiddenMenuItem/HiddenMenuItem";
import { ChangeScheduleIcon, FocusIcon } from "../../../../asset";
import { useDispatch } from "react-redux";
import {
  showMySchedule,
  changeMySchedule,
  CHANGE_MY_SCHEDULE_STATUS,
  defaultStatus,
  SHOW_MY_SCHEDULE_STATUS
} from "../../../../module/action/calander";

const HiddenMenuContainer = ({ state }) => {
  const dispatch = useDispatch();

  const dispatchChangeMySchedule = useCallback(() => {
    if (state === CHANGE_MY_SCHEDULE_STATUS) {
      dispatch(defaultStatus());
      return;
    }
    dispatch(changeMySchedule(1));
  }, [dispatch, state]);

  return (
    <S.AnimationWrap>
      <HiddenMenuItem
        onClick={dispatchChangeMySchedule}
        content="일정 교체"
        src={ChangeScheduleIcon}
      />
    </S.AnimationWrap>
  );
};

export default HiddenMenuContainer;
