import React, { useCallback, useEffect, useRef, useState } from "react";
import * as S from "./styles";
import AttendanceItem from "./AttendanceItem/AttendanceItem";
import MemoItem from "../../../../../Desktop/Molecules/Attendance/AttendanceStdList/AttendanceStdListBackground/StdListGrid/AttendanceList/ItemBtn/MemoItem/MemoItem";
import { putAttendanceMemoSaga } from "../../../../../../module/action/attendance";
import { useDispatch, useSelector } from "react-redux";

const AttendanceCell = props => {
  const { index, period, periodState, checkArr, memo } = props;
  const { onStateChange } = props;

  const dispatch = useDispatch();
  const attendanceData = useSelector(state => state.attendance.attendanceData);

  const [state, setState] = useState(false);
  const [text, setText] = useState(periodState);
  const [showMemoSelect, setShowMemoSelect] = useState(false);
  const [isWriteMemo, setIsWriteMemo] = useState(false);
  const [newMemo, setNewMemo] = useState("");
  const [isClick, setIsClick] = useState(false);

  const inputRef = useRef();

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

  const onClickItem = useCallback(
    (value, checkArray) => {
      if (~memoState.findIndex(state => state === value)) {
        setShowMemoSelect(true);
        setText("취소");
      } else if (text === "취소") {
        setShowMemoSelect(false);
      } else {
        setText(value);
        onStateChange(period, value, checkArray);
      }
    },
    [period, text]
  );
  const onWriteMemo = useCallback(
    (className, checkArray) => {
      let selectedNumbers = attendanceData[index].gradeClassNumber;

      if (checkArray[index]) {
        selectedNumbers = attendanceData
          .filter(
            (_, filterIndex) =>
              ~checkArray
                .map((data, mapIndex) => (data ? mapIndex : null))
                .filter(_ => _ !== null)
                .findIndex(fIndex => fIndex === filterIndex)
          )
          .map(std => std.gradeClassNumber);
      }

      dispatch(
        putAttendanceMemoSaga({
          numbers: selectedNumbers,
          periods: period,
          memo: className
        })
      );

      onStateChange(period, "이동", checkArray);
    },
    [checkArr, attendanceData, dispatch]
  );

  const changeMemoText = useCallback(e => {
    setNewMemo(e.target.value);
  }, []);
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
  const onClickButton = useCallback(text => {
    if (text === "취소") {
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
  }, [state, text]);
  useEffect(() => {
    if (isClick) {
      onWriteMemo(newMemo, checkArr);
    }
  }, [newMemo, isClick, checkArr]);

  return (
    <S.Container onClick={() => onClickCell()}>
      <S.ValueButton
        index={index}
        state={state}
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
        <S.MemoWrap showMemoSelect={showMemoSelect}>
          <MemoItem
            onWriteMemo={onWriteMemo}
            writeMemoByInput={writeMemoByInput}
            checkArr={checkArr}
          />
        </S.MemoWrap>
      </S.ValueButton>
    </S.Container>
  );
};

export default AttendanceCell;
