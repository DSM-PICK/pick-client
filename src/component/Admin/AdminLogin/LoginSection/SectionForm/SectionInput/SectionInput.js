import React from "react";
import * as S from "./styles";

const SectionInput = props => {
  const { type, ph_text } = props;

  return <S.Container placeholder={ph_text} type={type} />;
};

export default SectionInput;
