import React, { useCallback, useEffect, useState } from "react";
import * as S from "./styles";
import StateItem from "./StateItem/StateItem";
import { useSelector } from "react-redux";

const ItemBtn = props => {
  const { index, propText, period } = props;
  const { onStateChange } = props;

  const selectArr = useSelector(state => state.dAttendance.selectArr);
  const [isOpen, setIsOpen] = useState(false);
  const [text, setText] = useState(propText);

  const staticStates = [
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

  const onClickItem = useCallback(
    value => {
      setText(value);
      onStateChange(period, value, selectArr);
    },
    [period, selectArr]
  );

  const onClick = useCallback(() => {
    if (text !== "취업") {
      setIsOpen(!isOpen);
    }
  }, [isOpen]);

  return (
    <S.Container text={text} isOpen={isOpen} onClick={onClick}>
      {text !== "출석" && text}
      <S.Wrap index={index}>
        {index <= 17 && <S.Item current={text} value={text} />}
        {staticStates.map(
          state =>
            state.value !== text && (
              <StateItem
                key={state.value}
                isOpen={isOpen}
                current={text}
                value={state.value}
                onClickItem={onClickItem}
              />
            )
        )}
        {index > 17 && <S.Item current={text} value={text} />}
      </S.Wrap>
    </S.Container>
  );
};

export default React.memo(ItemBtn);
