import React from "react";
import * as S from "./styles";
import CalanderHeader from "./header/CalanderHeader";
import CalanderBody from "./body/CalanderBody";
import FunctionButton from "./FunctionButton/FunctionButton";

const Calander = () => {
  return (
    <S.Container>
      <CalanderHeader />
      <CalanderBody />
      <FunctionButton />
    </S.Container>
  );
};

export default Calander;
