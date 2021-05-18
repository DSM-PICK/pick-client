import React from "react";
import * as S from "./styles";
import HeaderTitle from "../../../Atoms/HeaderItem/HeaderTitle/HeaderTitle";
import Header from "../Header";

const HeaderOnlyTitle = props => {
  const { title } = props;

  return (
    <Header>
      <HeaderTitle title={title} />
    </Header>
  );
};

export default HeaderOnlyTitle;
