import React, { useState } from "react";
import * as S from "./styles";
import AttendanceItem from "./AttendanceItem/AttendanceItem";

const AttendanceCell = props => {
  const { index, periodState } = props;
  const { onClassClick } = props;

  const [state, setState] = useState(false);
  const [text, setText] = useState(periodState);
  const states = [
    {
      value: "출석"
    },
    {
      value: "외출"
    },
    {
      value: "현체"
    },
    {
      value: "병결"
    },
    {
      value: "공결"
    },
    {
      value: "무단"
    }
  ];

  const onClickItem = value => {
    setText(value);
    onClassClick(value);
  };

  const onClickCell = () => {
    setState(!state);
  };

  return (
    <S.Container onClick={() => onClickCell()}>
      <S.ValueButton index={index} state={state} text={text}>
        {!state && text}
        <S.Wrap>
          {states.map(state => (
            <AttendanceItem
              key={state.value}
              state={state}
              onClickItem={onClickItem}
            />
          ))}
        </S.Wrap>
      </S.ValueButton>
    </S.Container>
  );
};

export default AttendanceCell;
