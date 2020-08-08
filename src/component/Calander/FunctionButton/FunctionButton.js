import React, { useState, useCallback } from "react";
import * as S from "./styles";

const FunctionButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const changeIsOpen = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  return (
    <S.Container>
      <S.AnimationWrap isOpen={isOpen}>
        <S.Button>X</S.Button>
        <S.Button>X</S.Button>
      </S.AnimationWrap>
      <S.Button onClick={changeIsOpen} width={100}>
        +
      </S.Button>
    </S.Container>
  );
};
export default FunctionButton;
