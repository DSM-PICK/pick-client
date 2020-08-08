import React, { useState, useCallback } from "react";
import * as S from "./styles";
import { MenuAddIcon } from "../../../asset";
import HiddenMenu from "./HiddenMenu/HiddenMenu";

const FunctionButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const changeIsOpen = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

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
