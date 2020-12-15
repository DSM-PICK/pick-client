import React from "react";
import FooterItem from "../../Molecules/FooterItem/FooterItem";
import { FooterStaticData } from "./StaticData";
import * as S from "./styles";

const Footer = () => {
  const StaticDataArr = FooterStaticData;

  return (
    <S.Container>
      {StaticDataArr.map(staticData => (
        <FooterItem key={staticData.text} {...staticData} />
      ))}
    </S.Container>
  );
};

export default Footer;
