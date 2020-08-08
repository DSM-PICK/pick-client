import React from "react";
import * as S from "../styles";
import HiddenMenuItem from "./HiddenMenuItem/HiddenMenuItem";
import { ChangeScheduleIcon, FocusIcon } from "../../../../asset";

const HiddenMenu = ({ isOpen }) => {
  return (
    <S.AnimationWrap isOpen={isOpen}>
      <HiddenMenuItem content="내 일정 보기" src={FocusIcon} />
      <HiddenMenuItem content="일정 교체" src={ChangeScheduleIcon} />
    </S.AnimationWrap>
  );
};

export default HiddenMenu;
