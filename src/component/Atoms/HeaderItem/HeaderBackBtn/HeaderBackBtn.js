import React from "react";
import * as S from "./styles";
import { BackIcon } from "../../../../asset/index";

const HeaderBackBtn = props => {
  const { link } = props;

  return <S.Container to={link} url={BackIcon} />;
};

export default HeaderBackBtn;
