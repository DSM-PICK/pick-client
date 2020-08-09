import React, { useState, useCallback, useEffect } from "react";
import * as S from "./styles";
import { MenuAddIcon } from "../../../asset";
import HiddenMenu from "./HiddenMenu/HiddenMenu";
import { useDispatch, useSelector } from "react-redux";
import { defaultStatus } from "../../../module/action/calander";

const FunctionButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const { state } = useSelector((state) => state.calander);

  const changeIsOpen = useCallback(() => {
    setIsOpen(!isOpen);
    if (!isOpen || state === "DEFAULT") return;
    dispatch(defaultStatus());
  }, [dispatch, isOpen, state]);

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
