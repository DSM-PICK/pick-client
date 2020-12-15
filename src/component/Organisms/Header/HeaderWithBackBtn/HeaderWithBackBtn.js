import React from "react";
import * as S from "./styles";
import HeaderTitle from "../../../Atoms/HeaderItem/HeaderTitle/HeaderTitle";
import HeaderBackBtn from "../../../Atoms/HeaderItem/HeaderBackBtn/HeaderBackBtn";
import Header from "../Header";

const HeaderWithBackBtn = props => {
  const { link, title } = props;

  return (
    <Header>
      <HeaderBackBtn link={link} />
      <HeaderTitle title={title} />
    </Header>
  );
};

export default HeaderWithBackBtn;
