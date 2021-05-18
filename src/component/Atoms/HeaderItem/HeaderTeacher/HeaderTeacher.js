import React from "react";
import * as S from "./styles";

const HeaderTeacher = props => {
  const { name } = props;

  return <S.Container>{`담당교사 ${name}`}</S.Container>;
};

export default HeaderTeacher;
