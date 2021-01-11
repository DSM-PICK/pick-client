import React, { useCallback, useState } from "react";
import * as S from "./styles";
import StateItem from "./StateItem/StateItem";

const ItemBtn = props => {
  const { text } = props;

  const [isOpen, setIsOpen] = useState(false);
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

  const onClick = useCallback(() => {
    if (text !== "취업") {
      setIsOpen(!isOpen);
    }
    console.log("cl");
  }, [isOpen]);

  return (
    <S.Container text={text} isOpen={isOpen} onClick={onClick}>
      {!isOpen && text !== "출석" && text}
      <S.Wrap>
        <StateItem current={text} value={text} />
        {staticStates.map(
          state =>
            state.value !== text && (
              <StateItem key={state.value} current={text} value={state.value} />
            )
        )}
      </S.Wrap>
    </S.Container>
  );
};

export default ItemBtn;
