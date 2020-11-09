import React from "react";
import Button from "../../../Atoms/Button/Button";
import * as S from "./styles";

const ButtonWrap = props => {
  const { ButtonCss, ButtonData } = props;
  const { ButtonClick } = props;

  return (
    <S.Container>
      {ButtonData.map(data => {
        <Button
          key={data.text}
          css={ButtonCss}
          text={data.text}
          ButtonClick={ButtonClick}
        />;
      })}
    </S.Container>
  );
};

export default ButtonWrap;
