import React from "react";
import * as S from "./styles";

const Label = ({ style, name, value }) => {
  return (
    <S.Container {...style} name={name}>
      {value}
    </S.Container>
  );
};

export default Label;
