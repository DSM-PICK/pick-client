import React, { useCallback, useEffect, useRef, useState } from "react";
import * as S from "./styles";
import AttendanceItem from "./AttendanceItem/AttendanceItem";
import MemoItem from "./MemoItem/MemoItem";

const AttendanceCell = props => {
  const { index, period, periodState, checkArr, memo, cellIdx } = props;
  const { onStateChange, onWriteMemo } = props;

  const [state, setState] = useState(false);
  const [text, setText] = useState(periodState || "");
  const [showMemoSelect, setShowMemoSelect] = useState(false);
  const [isWriteMemo, setIsWriteMemo] = useState(false);
  const [newMemo, setNewMemo] = useState("");
  const [isClick, setIsClick] = useState(false);

  const inputRef = useRef();
  const inputSelectButtonRef = useRef();

  const memoState = ["이동"];
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

  const onClickItem = (value, checkArray) => {
    if (~memoState.findIndex(state => state === value)) {
      setShowMemoSelect(true);
      setText("취소");
    } else if (text === "취소") {
      setShowMemoSelect(false);
    } else {
      setText(value);
      onStateChange(period, value, checkArray);
    }
  };
  const changeMemoText = useCallback(
    e => {
      if (e.target.value.length > 6) {
        alert("메모의 길이는 6을 초과할 수 없습니다.");
      } else {
        setNewMemo(e.target.value);
      }
    },
    [newMemo]
  );
  const onKeyPress = useCallback(e => {
    if (e.key === "Enter") {
      setIsWriteMemo(false);
      setIsClick(true);
    }
  }, []);
  const writeMemoByInput = useCallback(() => {
    setIsWriteMemo(true);
    setTimeout(() => {
      inputRef.current.focus();
    }, [100]);
  }, [inputRef]);
  const onClickButton = useCallback(txt => {
    if (txt === "취소") {
      setShowMemoSelect(false);
    }
  }, []);
  const onClickCell = useCallback(() => {
    if (text === "취업") return;
    if (text === "취소") {
      setText(periodState);
      setShowMemoSelect(false);
    } else {
      setState(!state);
    }
  }, [periodState, state, text]);

  const handleClick = useCallback(
    e => {
      if (
        !e.target.closest(`.input-select-button-wrap-${index}`) &&
        !e.target.closest(`.write-memo-${index}`)
      ) {
        setIsWriteMemo(false);
        if (text === "취소") {
          setText(periodState);
          setShowMemoSelect(false);
        }
      }

      if (
        !e.target.closest(`.input-select-button-wrap-${index}`) &&
        e.target.closest(`.input-select-button-${index}`)
      ) {
        setIsWriteMemo(true);
      }
    },
    [periodState, newMemo, text]
  );
  const stopBubling = e => {
    e.stopPropagation();
  };
  useEffect(() => {
    if (isClick) {
      onWriteMemo(newMemo, period);
    }
  }, [periodState, text, newMemo, isClick]);
  useEffect(() => {
    if (isWriteMemo || showMemoSelect) {
      document.addEventListener("click", handleClick);
      return () => {
        document.removeEventListener("click", handleClick);
      };
    }
  }, [isWriteMemo, showMemoSelect]);

  return (
    <S.Container onClick={() => onClickCell()}>
      <S.ValueButton
        index={index}
        state={state}
        isWriteMemo={isWriteMemo}
        text={text}
        onClick={() => onClickButton(text)}
      >
        <S.Wrap>
          {states.map(
            state =>
              state.value !== text && (
                <AttendanceItem
                  key={state.value}
                  text={text}
                  state={state.value}
                  onClickItem={onClickItem}
                  checkArr={checkArr}
                />
              )
          )}
        </S.Wrap>
        <S.WriteMemoWrap
          type="text"
          ref={inputRef}
          className={`write-memo-${index}`}
          value={newMemo}
          onChange={changeMemoText}
          onKeyPress={onKeyPress}
          isWriteMemo={isWriteMemo}
        />
        {text === "이동" && memo ? memo : text !== "출석" && text}
        <S.MemoWrap
          index={index}
          showMemoSelect={showMemoSelect}
          onClick={stopBubling}
          cellIdx={cellIdx}
        >
          <MemoItem
            index={index}
            period={period}
            checkArr={checkArr}
            inputSelectButtonRef={inputSelectButtonRef}
            onWriteMemo={onWriteMemo}
            writeMemoByInput={writeMemoByInput}
            setShowMemoSelect={setShowMemoSelect}
          />
        </S.MemoWrap>
      </S.ValueButton>
    </S.Container>
  );
};

export default React.memo(AttendanceCell);
