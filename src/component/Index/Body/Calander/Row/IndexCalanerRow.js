import React from "react";
import * as S from "./styles";
import IndexCalanderItem from "../Item/IndexCalanderItem";

const IndexCalanderRow = ({ floor2, floor3, floor4 }) => {
  return (
    <S.Container>
      <IndexCalanderItem floor={4} teacher={floor4} />
      <IndexCalanderItem floor={3} teacher={floor3} />
      <IndexCalanderItem floor={2} teacher={floor2} />
    </S.Container>
  );
};

export default IndexCalanderRow;
