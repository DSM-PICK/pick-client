import React from "react";
import * as S from "./styles";
import CalanderHeader from "./CalanderHeader/CalanderHeader";
import CalanderBody from "./CalanderBody/CalanderBody";
import FunctionButtonContainer from "./FunctionButton/FunctionButtonContainer";

const Calander = () => {
  return (
    <S.Container>
      <CalanderHeader />
      <CalanderBody />
      <FunctionButtonContainer />
    </S.Container>
  );
};

export default Calander;
