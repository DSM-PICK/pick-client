import React from "react";
import Button from "../../../../Atoms/Button/Button";
import * as S from "./style";

const StatsPlaceBackground = props => {
  const { textButtonData } = props;
  const { onTextButtonClick } = props;

  return (
    <S.Container>
      <S.ButtonWrap>
        <Button
          text={"빠른 조회하기"}
          css={S.HeaderButtonCSS}
          onClick={() => console.log("1234")}
        />
      </S.ButtonWrap>
      <S.FloorWrap>
        {textButtonData.map((data, index) => (
          <S.FloorTextButton
            key={data.text}
            name={data.text}
            isClicked={data.isClicked}
            onClick={() => onTextButtonClick(index)}
          >
            {data.text}
          </S.FloorTextButton>
        ))}
      </S.FloorWrap>
    </S.Container>
  );
};

export default StatsPlaceBackground;
