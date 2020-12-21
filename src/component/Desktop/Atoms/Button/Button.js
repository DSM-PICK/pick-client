import React from "react";
import * as S from "./styles";

const Button = ({ style, name, type, value, onClick }) => {
  console.log("button");

  return (
    <S.Button
      {...style}
      name={name}
      type={type}
      autoComplete={"off"}
      onClick={e => onClick(e)}
    >
      {value}
    </S.Button>
  );
};

export default Button;
