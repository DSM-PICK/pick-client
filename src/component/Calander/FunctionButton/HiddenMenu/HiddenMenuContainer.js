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
  SHOW_MY_SCHEDULE_STATUS,
} from "../../../../module/action/calander";

const HiddenMenuContainer = ({ isOpen, state }) => {
  useEffect(() => {
    console.log("HiddenMenuContainer");
  });
  const dispatch = useDispatch();

  const dispatchShowMySchedule = useCallback(() => {
    if (state === SHOW_MY_SCHEDULE_STATUS) {
      dispatch(defaultStatus());
      return;
    }
    dispatch(showMySchedule("오유신"));
  }, [dispatch, state]);

  const dispatchChangeMySchedule = useCallback(() => {
    if (state === CHANGE_MY_SCHEDULE_STATUS) {
      dispatch(defaultStatus());
      return;
    }
    dispatch(changeMySchedule(1));
  }, [dispatch, state]);

  return (
    <S.AnimationWrap isOpen={isOpen}>
      <HiddenMenuItem
        onClick={dispatchShowMySchedule}
        content="내 일정 보기"
        src={FocusIcon}
      />
      <HiddenMenuItem
        onClick={dispatchChangeMySchedule}
        content="일정 교체"
        src={ChangeScheduleIcon}
      />
    </S.AnimationWrap>
  );
};

export default HiddenMenuContainer;
