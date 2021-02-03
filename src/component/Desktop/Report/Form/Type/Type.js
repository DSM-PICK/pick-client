import React from "react";
import * as S from "../../styles";
import FormTypeButtons from "./FormTypeButtons";

const Type = ({ setType, type }) => {
  return (
    <S.FormType>
      <S.FormText>종류</S.FormText>
      <FormTypeButtons type={type} setType={setType} />
    </S.FormType>
  );
};

export default Type;
