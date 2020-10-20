import React from "react";
import * as S from "./styles";

const SectionInput = props => {
  const {
    type,
    ph_text,
    minus_width,
    customRef,
    onChange,
    name,
    value
  } = props;
  return (
    <S.Container
      value={value}
      name={name}
      onChange={onChange}
      placeholder={ph_text}
      minus_width={minus_width}
      ref={customRef || undefined}
      type={type}
    />
  );
  const { type, ph_text } = props;

  return <S.Container placeholder={ph_text} type={type} />;
};

export default SectionInput;
