import React from "react";
import * as S from "./styles";
import Body from "../../../Molecules/Body/Body";
import { StatsBodyStaticData } from "./StaticData";
import BigLinkButton from "../../../Atoms/BigLinkButton/BigLinkButton";
const StatsBody = () => {
  return (
    <Body>
      {StatsBodyStaticData.map(data => (
        <BigLinkButton key={data.text} link={data.link} text={data.text} />
      ))}
    </Body>
  );
};

export default StatsBody;
