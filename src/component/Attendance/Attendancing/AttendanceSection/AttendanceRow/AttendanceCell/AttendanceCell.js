import React, { useState } from "react";
import * as S from "./styles";
import AttendanceItem from "./AttendanceItem/AttendanceItem";

const AttendanceCell = props => {
  const { index, period, periodState } = props;
  const { onStateChange } = props;

  const [state, setState] = useState(false);
  const [text, setText] = useState(periodState);
  const states = [
    {
      value: "출석"
    },
    {
      value: "이동"
    },
    {
      value: "외출"
    },
    {
      value: "현체"
    },
    {
      value: "귀가"
    },
    {
      value: "무단"
    }
  ];

  const onClickItem = value => {
    setText(value);
    onStateChange(period, value);
  };

  const onClickCell = () => {
    if (text === "취업") return;
    setState(!state);
  };

  return (
    <S.Container onClick={() => onClickCell()}>
      <S.ValueButton index={index} state={state} text={text}>
        {text !== "출석" && text}
        <S.Wrap>
          {states.map(
            state =>
              state.value !== text && (
                <AttendanceItem
                  key={state.value}
                  text={text}
                  state={state.value}
                  onClickItem={onClickItem}
                />
              )
          )}
        </S.Wrap>
      </S.ValueButton>
    </S.Container>
  );
};

export default AttendanceCell;
