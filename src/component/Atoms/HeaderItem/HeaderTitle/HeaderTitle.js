import React from "react";
import * as S from "./styles";

const HeaderTitle = props => {
  const { title } = props;

  return <S.Container>{title}</S.Container>;
};

export default HeaderTitle;
