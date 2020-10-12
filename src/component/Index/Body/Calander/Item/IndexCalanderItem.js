import React from "react";
import * as S from "./styles";

const IndexCalanderItem = ({ floor, teacher }) => {
  return (
    <S.Container>
      <div>{floor}층</div>
      <div>{teacher}</div>
      <div>선생님</div>
    </S.Container>
  );
};

export default IndexCalanderItem;
