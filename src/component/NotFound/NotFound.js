import React from "react";
import { NotFound404, NotFoundText } from "../../asset/Admin/Admin";
import * as S from "./styles";

const NotFound = () => {
  return (
    <S.Container>
      <S.NotFoundImg src={NotFound404} />
      <S.NotFoundText src={NotFoundText} />
    </S.Container>
  );
};

export default NotFound;
