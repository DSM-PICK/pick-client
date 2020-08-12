import React, { useCallback, useRef } from "react";
import * as S from "../styles";
import HiddenMenuItem from "./HiddenMenuItem/HiddenMenuItem";
import { ChangeScheduleIcon, FocusIcon } from "../../../../asset";
import { useDispatch } from "react-redux";
import {
  showMySchedule,
  changeMySchedule,
} from "../../../../module/action/calander";

const HiddenMenu = ({ isOpen }) => {
  const dispatch = useDispatch();

  const dispatchShowMySchedule = useCallback(() => {
    dispatch(showMySchedule("오유신"));
  }, [dispatch]);

  const dispatchChangeMySchedule = useCallback(() => {
    dispatch(changeMySchedule(1));
  }, [dispatch]);

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

export default HiddenMenu;
