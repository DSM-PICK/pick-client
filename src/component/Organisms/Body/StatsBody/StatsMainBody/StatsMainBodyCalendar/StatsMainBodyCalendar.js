import React from "react";
import CalanderListContainer from "../../../../../Calander/CalanderBody/CalanderList/CalanderListContainer";
import CalanderHeader from "../../../../../Calander/CalanderHeader/CalanderHeader";
import * as S from "./styles";

const styles = () => {
  return (
    <S.Container>
      <CalanderHeader />
      <CalanderListContainer />
    </S.Container>
  );
};

export default styles;
