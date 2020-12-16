import React from "react";
import HeaderWithBackBtn from "../../Organisms/Header/HeaderWithBackBtn/HeaderWithBackBtn";
import * as S from "./styles";

const StatsForClass = props => {
  const { link, title } = props;

  return (
    <S.Container>
      <S.HeaderOnlyTitleWrap>
        <HeaderWithBackBtn link={link} title={title} />
      </S.HeaderOnlyTitleWrap>
    </S.Container>
  );
};

export default StatsForClass;
