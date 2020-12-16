import React from "react";
import * as S from "./styles";
import HeaderFullOptions from "../../Organisms/Header/HeaderFullOptions/HeaderFullOptions";

const StatsForClass = props => {
  const { link, title } = props;

  return (
    <S.Container>
      <HeaderFullOptions link={link} title={title} />
    </S.Container>
  );
};

export default StatsForClass;
