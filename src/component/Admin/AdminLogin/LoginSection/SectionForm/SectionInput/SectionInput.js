import React from "react";
import * as S from "./styles";

const SectionInput = props => {
  const { type, ph_text, onChange, name, value, customRef } = props;

  return (
    <S.Container
      ref={customRef}
      placeholder={ph_text}
      type={type}
      onChange={onChange}
      name={name}
      value={value}
    />
  );
};

export default SectionInput;
