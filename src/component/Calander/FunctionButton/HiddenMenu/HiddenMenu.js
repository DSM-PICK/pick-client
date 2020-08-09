import React, { useCallback, useEffect, memo } from "react";
import * as S from "../styles";
import HiddenMenuItem from "./HiddenMenuItem/HiddenMenuItem";
import { ChangeScheduleIcon, FocusIcon } from "../../../../asset";
import { useDispatch, useSelector } from "react-redux";
import { showMySchedule } from "../../../../module/action/calander";

const HiddenMenu = ({ isOpen }) => {
  const { state } = useSelector((state) => state.calander);
  const dispatch = useDispatch();

  const dispatchShowMySchedule = useCallback(() => {
    if (state === "SHOW_MY_SCHEDULE") return;
    dispatch(showMySchedule("오유신"));
  }, [dispatch, state]);

  return (
    <S.AnimationWrap isOpen={isOpen}>
      <HiddenMenuItem
        onClick={dispatchShowMySchedule}
        content="내 일정 보기"
        src={FocusIcon}
      />
      <HiddenMenuItem content="일정 교체" src={ChangeScheduleIcon} />
    </S.AnimationWrap>
  );
};

export default HiddenMenu;
