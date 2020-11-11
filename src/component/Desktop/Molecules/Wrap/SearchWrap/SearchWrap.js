import React from "react";
import * as S from "./styles";
import Img from "../../../Atoms/Img/Img";
import { Search } from "../../../../../asset/Desktop";
import Input from "../../../Atoms/Input/Input";

const SearchWrap = () => {
  const InputCSS = {
    width: "180px",
    height: "24px",
    border: "none",
    radiusSize: "16px",
    background: "#ffffff"
  };

  return (
    <S.Container>
      <Img src={Search} width={"14px"} height={"14px"} />
      <Input css={InputCSS} type={"text"} />
    </S.Container>
  );
};

export default SearchWrap;
