import React, { useState } from "react";
import SectionInput from "../SectionInput";
import * as S from "./styles";

const SectionInputPW = () => {
  const [inputType, setInputType] = useState("password");

  return (
    <S.Container>
      <SectionInput
        ph_text="비밀번호를 입력하세요"
        type={inputType}
        minus_width={30}
      />
      <S.ShowBtn inputType={inputType}></S.ShowBtn>
    </S.Container>
  );
};

export default SectionInputPW;
