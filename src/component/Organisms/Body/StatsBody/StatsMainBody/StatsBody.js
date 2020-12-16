import React from "react";
import * as S from "./styles";
import Body from "../../../../Molecules/Body/Body";
import { StatsMainBodyStaticData } from "../StaticData";
import BigLinkButton from "../../../../Atoms/BigLinkButton/BigLinkButton";

const StatsBody = () => {
  const date = new Date();

  const modifyDate2Text = date => {
    return `${date.getFullYear()}년 ${
      date.getMonth() + 1
    }월 ${date.getDate()}일`;
  };

  const dateText = modifyDate2Text(date);

  return (
    <Body>
      <S.SetDateButton>
        <S.BigLinkButtonDate>{dateText}</S.BigLinkButtonDate>
        <S.BigLinkButtonText>
          {`통계 확인을 원하는 날짜를 선택해주세요`}
        </S.BigLinkButtonText>
      </S.SetDateButton>
      {StatsMainBodyStaticData.map(data => (
        <S.BigLinkButtonWrap key={data.text}>
          <BigLinkButton link={data.link} text={data.text} />
        </S.BigLinkButtonWrap>
      ))}
    </Body>
  );
};

export default StatsBody;
