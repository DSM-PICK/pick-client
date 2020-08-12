import React from "react";
import * as S from "./styles";
import CalanderList from "./List/CalanderList";
import CalanderAlert from "./alert/CalanderAlert";

const CalanderBody = () => {
  return (
    <S.Container>
      <CalanderList />
      <CalanderAlert />
    </S.Container>
  );
};

export default CalanderBody;
