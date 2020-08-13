import React from "react";
import * as S from "./styles";
import CalanderAlert from "../../Alert/CalanderAlert";
import CalanderListContainer from "./CalanderList/CalanderListContainer";

const CalanderBody = () => {
  return (
    <S.Container>
      <CalanderListContainer />
      <CalanderAlert />
    </S.Container>
  );
};

export default CalanderBody;
