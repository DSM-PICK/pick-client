import React from "react";
import { UserDefaultSvg } from "../../../../../asset";
import UserButton from "../../../Atoms/Button/UserButton/UserButton";
import Img from "../../../Atoms/Img/Img";
import * as S from "./styles";

const UserWrap = () => {
  const UserButtonCss = {
    flex: "1",
    color: "#ffffff",
    fontSize: "15px",
    fontWeight: "bold"
  };

  const img = UserDefaultSvg;

  return (
    <S.Container>
      <Img src={img} width={"20px"} height={"20px"} />
      <UserButton text={"신요셉"} css={UserButtonCss} />
    </S.Container>
  );
};

export default UserWrap;
