import React from "react";
import { useSelector } from "react-redux";
import IndexCalanderRow from "../Row/IndexCalanerRow";
import * as S from "./styles";

const IndexCalanderList = () => {
  const data = useSelector(store => store.teacher.week);
  return (
    <S.Container>
      {data.map(({ floor2, floor3, floor4, date }) => {
        return (
          <IndexCalanderRow floor2={floor2} floor3={floor3} floor4={floor4} />
        );
      })}
    </S.Container>
  );
};

export default IndexCalanderList;
