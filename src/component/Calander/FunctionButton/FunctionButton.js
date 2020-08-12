import React, { useState, useCallback } from "react";
import * as S from "./styles";
import { MenuAddIcon } from "../../../asset";
import HiddenMenu from "./HiddenMenu/HiddenMenu";
import { useDispatch } from "react-redux";
import { defaultStatus } from "../../../module/action/calander";

const FunctionButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();

  const changeIsOpen = useCallback(() => {
    const nextValue = !isOpen;

    setIsOpen(nextValue);
    if (nextValue) return;
    dispatch(defaultStatus());
  }, [dispatch, isOpen]);

  return (
    <S.Container>
      <HiddenMenu isOpen={isOpen} />
      <S.ButtonWrap>
        <S.MenuText></S.MenuText>
        <S.BigButton onClick={changeIsOpen} isOpen={isOpen}>
          <img src={MenuAddIcon} />
        </S.BigButton>
      </S.ButtonWrap>
    </S.Container>
  );
};
export default FunctionButton;
