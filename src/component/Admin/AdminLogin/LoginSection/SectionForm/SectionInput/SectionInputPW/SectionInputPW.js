import React, { useState } from "react";
import React from "react";
import SectionInput from "../SectionInput";
import * as S from "./styles";

const SectionInputPW = () => {
  return (
    <S.Container>
      <SectionInput ph_text="비밀번호를 입력하세요" type={"password"} />
      <S.ShowBtn />
    </S.Container>
  );
};

export default SectionInputPW;
