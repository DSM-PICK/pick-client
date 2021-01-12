import React from "react";
import * as S from "./styles";

const CurrentWrap = props => {
  const { floorData } = props;
  const { title, floorArr } = floorData;

  return (
    <S.Container>
      <S.Header>
        <S.HeaderTitle>{title}</S.HeaderTitle>
      </S.Header>
      <S.Body>
        {floorArr.map(obj => (
          <S.BodyItem key={obj.name} done={obj.done}>
            {obj.name}
          </S.BodyItem>
        ))}
      </S.Body>
    </S.Container>
  );
};

export default CurrentWrap;
