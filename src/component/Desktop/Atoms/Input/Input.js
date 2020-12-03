import React from "react";
import * as S from "./styles";

const Input = ({ style, name, type, value, placeholder, onChange }) => {
  return (
    <S.Input
      {...style}
      name={name}
      type={type}
      value={value}
      placeholder={placeholder}
      autoComplete={"off"}
      onChange={e => onChange(e)}
    />
  );
};

export default Input;
