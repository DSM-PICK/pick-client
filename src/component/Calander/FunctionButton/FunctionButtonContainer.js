import React, { useState, useCallback } from "react";
import * as S from "./styles";
import { MenuAddIcon } from "../../../asset";
import HiddenMenuContainer from "./HiddenMenu/HiddenMenuContainer";
import { useDispatch, useSelector } from "react-redux";
import { defaultStatus, DEFAULT_STATUS } from "../../../module/action/calander";

const FunctionButtonContainer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const state = useSelector((store) => store.calander.state);

  const changeIsOpen = useCallback(() => {
    const nextValue = !isOpen;

    setIsOpen(nextValue);
    if (nextValue || state === DEFAULT_STATUS) return;
    dispatch(defaultStatus());
  }, [dispatch, isOpen, state]);

  return (
    <S.Container>
      <HiddenMenuContainer isOpen={isOpen} state={state} />
      <S.ButtonWrap>
        <S.MenuText />
        <S.BigButton onClick={changeIsOpen} isOpen={isOpen}>
          <img src={MenuAddIcon} />
        </S.BigButton>
      </S.ButtonWrap>
    </S.Container>
  );
};
export default FunctionButtonContainer;
