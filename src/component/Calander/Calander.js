import React from "react";
import * as S from "./styles";
import CalanderHeader from "./header/CalanderHeader";
import CalanderBody from "./body/CalanderBody";

const Calander = () => {
  return (
    <S.Container>
      <CalanderHeader />
      <CalanderBody />
    </S.Container>
  );
};

export default Calander;
