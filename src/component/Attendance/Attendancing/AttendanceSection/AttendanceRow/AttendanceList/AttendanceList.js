import React from "react";
import StateCell from "./StateCell/StateCell";
import * as S from "./styles";

const AttendanceList = props => {
  const { index } = props;
  const { memoArr, stateArr } = props.attData;
  const { onStateChange, setAllStudentStateArray } = props;

  const length = stateArr.length;
  const periodArr = [10, 9, 8, 7].slice(0, length).reverse();

  return (
    <S.Containter>
      {stateArr.map((state, mapIdx) => (
        <S.CellWrap key={mapIdx}>
          <StateCell
            key={mapIdx}
            index={index}
            memo={memoArr[mapIdx]}
            propText={state}
            period={periodArr[mapIdx]}
            onStateChange={onStateChange}
            setAllStudentStateArray={setAllStudentStateArray}
          />
        </S.CellWrap>
      ))}
    </S.Containter>
  );
};

export default AttendanceList;
