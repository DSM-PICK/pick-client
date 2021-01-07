import React from "react";
import * as S from "./styles";

const Toggle = props => {
  const { toggle, onClick } = props;

  console.log(toggle);

  return (
    <S.Container>
      <S.Toggle toggle={toggle} onClick={onClick}>
        <S.ToggleItem toggle={toggle} />
        <S.ToggleText toggle={toggle} state={true}>
          교실자습
        </S.ToggleText>
        <S.ToggleText toggle={toggle} state={false}>
          전공동아리
        </S.ToggleText>
      </S.Toggle>
    </S.Container>
  );
};

export default Toggle;
