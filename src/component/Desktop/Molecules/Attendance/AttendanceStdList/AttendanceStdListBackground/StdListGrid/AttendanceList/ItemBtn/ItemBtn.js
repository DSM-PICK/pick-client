import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState
} from "react";
import * as S from "./styles";
import StateItem from "./StateItem/StateItem";
import { useDispatch, useSelector } from "react-redux";
import MemoItem from "./MemoItem/MemoItem";
import { DAttendanceActionCreater } from "../../../../../../../../../module/action/d_attendance";

const ItemBtn = props => {
  const { index, propText, period, memo } = props;
  const { onStateChange } = props;

  const dispatch = useDispatch();
  const selectArr = useSelector(state => state.dAttendance.selectArr);
  const attendanceData = useSelector(state => state.dAttendance.attendanceData);
  const [isOpen, setIsOpen] = useState(false);
  const [text, setText] = useState(propText);
  const [isMemoStateClick, setIsMemoStateClick] = useState(false);
  const [isWriteMemo, setIsWriteMemo] = useState(false);
  const [isClick, setIsClick] = useState(false);
  const [newMemo, setNewMemo] = useState("");

  const textData = useMemo(() => (isMemoStateClick ? text : propText), [
    text,
    propText
  ]);

  const inputRef = useRef();

  const disableState = ["취업", "기초학력"];
  const memoState = ["이동"];
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

  const { setAttendanceMemoSaga } = DAttendanceActionCreater;

  const onClickItem = useCallback(
    value => {
      if (value === "취소") {
        setText("출석");
        setIsMemoStateClick(false);
        onStateChange(period, "출석", selectArr);
      } else if (~memoState.findIndex(data => data === value)) {
        setIsMemoStateClick(true);
        setText("취소");
      } else {
        setText(value);
        onStateChange(period, value, selectArr);
      }
    },
    [period, selectArr]
  );
  const writeMemoByInput = useCallback(() => {
    setIsWriteMemo(true);
    setIsMemoStateClick(false);
    setTimeout(() => {
      inputRef.current.focus();
    }, [100]);
  }, [inputRef]);
  const onWriteMemo = useCallback(
    className => {
      setIsMemoStateClick(false);
      setText(className);
      let selectedNumbers = attendanceData[index].gradeClassNumber;
      if (selectArr[index]) {
        selectedNumbers = attendanceData
          .filter(
            (_, filterIndex) =>
              ~selectArr
                .map((data, mapIndex) => (data ? mapIndex : null))
                .filter(_ => _ !== null)
                .findIndex(fIndex => fIndex === filterIndex)
          )
          .map(std => std.gradeClassNumber);
      }
      dispatch(
        setAttendanceMemoSaga({
          numbers: selectedNumbers,
          periods: period,
          memo: className
        })
      );
      onStateChange(period, "이동", selectArr);
    },
    [selectArr, attendanceData, dispatch]
  );
  const onClick = useCallback(() => {
    if (textData === "취소") {
      setText("출석");
      setIsMemoStateClick(false);
    } else if (!~disableState.findIndex(state => state === textData)) {
      setIsOpen(!isOpen);
    }
  }, [isOpen, textData]);
  const handleClick = useCallback(
    e => {
      if (!e.target.closest(`.write-memo-${index}`)) {
        setIsWriteMemo(false);
        setIsClick(true);
      }
    },
    [newMemo]
  );
  const changeMemoText = useCallback(e => {
    if (e.target.value.length < 7) {
      setNewMemo(e.target.value);
    } else {
      alert("메모는 6글자를 초과할 수 없습니다.");
    }
  }, []);
  const onKeyPress = useCallback(e => {
    if (e.key === "Enter") {
      setIsWriteMemo(false);
      setIsClick(true);
    }
  }, []);
  const stopBubling = e => {
    e.stopPropagation();
  };

  useEffect(() => {
    if (isClick) {
      onWriteMemo(newMemo);
    }
  }, [newMemo, isClick]);
  useEffect(() => {
    if (isWriteMemo) {
      document.addEventListener("click", handleClick);
      return () => {
        document.removeEventListener("click", handleClick);
      };
    }
  }, [isWriteMemo]);

  return (
    <S.Container
      text={textData}
      isOpen={isOpen}
      onClick={onClick}
      className={`write-memo-${index}`}
    >
      <S.Wrap index={index}>
        {index <= 17 && <S.Item current={textData} value={textData} />}
        {staticStates.map(
          state =>
            state.value !== textData && (
              <StateItem
                key={state.value}
                isOpen={isOpen}
                current={textData}
                value={state.value}
                onClickItem={onClickItem}
              />
            )
        )}
        {index > 17 && <S.Item current={textData} value={textData} />}
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
      {isWriteMemo
        ? ""
        : textData !== "출석"
        ? ~memoState.findIndex(memo => memo === textData) && memo !== null
          ? memo
          : textData
        : ""}
      {isMemoStateClick && (
        <S.MemoWrap onClick={stopBubling}>
          <MemoItem
            onWriteMemo={onWriteMemo}
            writeMemoByInput={writeMemoByInput}
          />
        </S.MemoWrap>
      )}
    </S.Container>
  );
};

export default React.memo(ItemBtn);
