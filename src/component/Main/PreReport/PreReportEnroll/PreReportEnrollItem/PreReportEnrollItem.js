import React from "react";
import * as S from "./styles";
import { DeleteBtn } from "../../../../../asset/index";
const PreReportEnrollItem = props => {
  const { name } = props;

  return (
    <S.Container>
      {name}
      <S.DelBtn img={DeleteBtn}></S.DelBtn>
    </S.Container>
  );
};

export default PreReportEnrollItem;
