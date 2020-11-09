import React from "react";
import LinkButton from "../../../Atoms/LinkButton/LinkButton";
import * as S from "./styles";

const LinkWrap = props => {
  const { LinkButtonCss, LinkButtonData } = props;

  return (
    <S.Container>
      {LinkButtonData.map(data => (
        <LinkButton
          key={data.text}
          text={data.text}
          path={data.path}
          css={LinkButtonCss}
        />
      ))}
    </S.Container>
  );
};

export default LinkWrap;
