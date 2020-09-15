import React from "react";
import IndexHeader from "./Header/IndexHeader";
import IndexBody from "./Body/IndexBody";
import * as S from "./styles";

const Index = () => {
  return (
    <S.Container>
      <IndexHeader />
      <IndexBody />
    </S.Container>
  );
};

export default Index;
