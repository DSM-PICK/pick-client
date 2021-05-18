import React from "react";
import * as S from "./styles";
import Body from "../../../../Molecules/Body/Body";
import { StatsScheduleBodyStaticData } from "../StaticData";
import BigLinkButton from "../../../../Atoms/BigLinkButton/BigLinkButton";

const StatsScheduleBody = () => {
  return (
    <Body>
      {StatsScheduleBodyStaticData.map(data => (
        <S.BigLinkButtonWrap key={data.text}>
          <BigLinkButton link={data.link} text={data.text} />
        </S.BigLinkButtonWrap>
      ))}
    </Body>
  );
};

export default StatsScheduleBody;
