import React, { useCallback, useState } from "react";
import * as S from "./styles";
import AttendanceCell from "./AttendanceCell/AttendanceCell";
import { useDispatch } from "react-redux";
import { postAttendanceStdDataSaga } from "../../../../../module/action/attendance";

const AttendanceRow = props => {
  const { index } = props;
  const { name, state: states, gradeClassNumber } = props.attendance;

  const [statesArr, setStatesArr] = useState(
    Object.values(states).filter(state => !!state)
  );
  const cascadeState = ["귀가"];
  const periodArr = statesArr.length === 3 ? [8, 9, 10] : [7, 8, 9, 10];

  const dispatch = useDispatch();
  const postAttendanceStdData = useCallback(
    (period, value) => {
      dispatch(
        postAttendanceStdDataSaga({
          number: gradeClassNumber,
          period,
          state: value
        })
      );
    },
    [dispatch, gradeClassNumber]
  );
  const onStateChange = (period, value) => {
    if (~cascadeState.findIndex(state => state === value)) {
      cascadeClick(period, value);
    } else {
      postAttendanceStdData(period, value);
      onClickItems(period, value);
    }
  };
  const cascadeClick = (period, value) => {
    let tempArr = [];
    for (let i = 0; i < period - 7; i++) {
      tempArr.push(statesArr[i]);
    }
    for (let p = period; p <= 10; p++) {
      postAttendanceStdData(p, value);
      tempArr.push(value);
    }
    setStatesArr(tempArr);
  };
  const onClickItems = useCallback(
    (period, value) => {
      setStatesArr(
        statesArr.map((state, index) => {
          if (index === period - 7) {
            return value;
          }
          return state;
        })
      );
    },
    [statesArr]
  );

  return (
    <S.Containter>
      <S.SectionSeq>{index + 1}</S.SectionSeq>
      <S.SectionStdNum>{gradeClassNumber}</S.SectionStdNum>
      <S.SectionName>{name}</S.SectionName>
      <S.SectionClassWrap>
        {statesArr.map((state, idx) => (
          <S.SectionClass key={state + idx}>
            <AttendanceCell
              index={index}
              period={periodArr[idx]}
              periodState={state}
              onStateChange={onStateChange}
              onClickItems={onClickItems}
            />
          </S.SectionClass>
        ))}
      </S.SectionClassWrap>
    </S.Containter>
  );
};

export default AttendanceRow;
