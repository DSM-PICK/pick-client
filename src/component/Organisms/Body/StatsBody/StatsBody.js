import React from "react";
import * as S from "./styles";
import Body from "../../../Molecules/Body/Body";
import { StatsBodyStaticData } from "./StaticData";
import BigLinkButton from "../../../Atoms/BigLinkButton/BigLinkButton";
const StatsBody = () => {
  return (
    <Body>
      {StatsBodyStaticData.map(data => (
        <S.BigLinkButtonWrap key={data.text}>
          <BigLinkButton link={data.link} text={data.text} />
        </S.BigLinkButtonWrap>
      ))}
    </Body>
  );
};

export default StatsBody;
