import React from "react";
import * as S from "./styles";
import IndexCalanderHeader from "./Header/IndexCalanderHeader";
import IndexCalanderList from "./List/IndexCalanderList";

const IndexCalander = () => {
  return (
    <S.Container>
      <IndexCalanderHeader />
      <IndexCalanderList />
    </S.Container>
  );
};

export default IndexCalander;
