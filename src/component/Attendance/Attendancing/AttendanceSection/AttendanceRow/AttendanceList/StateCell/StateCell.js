import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState
} from "react";
import { useDispatch, useSelector } from "react-redux";
import { modifyAttendancesDataSaga } from "../../../../../../../module/action/attendance";
import MemoItem from "./MemoItem/MemoItem";
import StateItem from "./StateItem/StateItem";
import * as S from "./styles";

const StateCell = props => {
  const { index, propText, period, memo } = props;
  const { onStateChange, setAllStudentStateArray } = props;

  const dispatch = useDispatch();
  const checkArr = useSelector(state => state.attendance.checkArr);
  const attendanceData = useSelector(state => state.attendance.attendanceData);

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

  const disableState = ["취업", "기초학력", "방과후"];
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

  const onClickItem = value => {
    if (value === "취소") {
      setText("출석");
      setIsMemoStateClick(false);
      onStateChange(period, "출석", checkArr);
    } else if (~memoState.findIndex(data => data === value)) {
      setIsMemoStateClick(true);
      setText("취소");
    } else {
      setText(value);
      onStateChange(period, value, checkArr);
    }
  };
  const writeMemoByInput = () => {
    setIsWriteMemo(true);
    setIsMemoStateClick(false);
    setTimeout(() => {
      inputRef.current.focus();
    }, [100]);
  };
  const onWriteMemo = className => {
    setIsMemoStateClick(false);
    setText(className);
    let selectedNumbers = attendanceData[index].gradeClassNumber;
    if (checkArr[index]) {
      selectedNumbers = attendanceData
        .filter(
          (_, filterIndex) =>
            ~checkArr
              .map((data, mapIndex) => (data ? mapIndex : null))
              .filter(_ => _ !== null)
              .findIndex(fIndex => fIndex === filterIndex)
        )
        .map(std => std.gradeClassNumber);
    }

    setAllStudentStateArray(prevState => {
      const length = prevState[0].stateArr.length;
      const checkArray = checkArr
        .map((data, idx) => (data ? idx : false))
        .filter(data => data !== false)
        .reverse();

      if (checkArr[index]) {
        return prevState.map((prevData, mapIdx) =>
          ~checkArray.findIndex(data => data === mapIdx)
            ? {
                ...prevData,
                stateArr: prevData.stateArr.map((state, stateIdx) =>
                  length + period - 11 === stateIdx ? "이동" : state
                ),
                memoArr: prevData.memoArr.map((memo, stateIdx) =>
                  length + period - 11 === stateIdx ? className : memo
                )
              }
            : prevData
        );
      }

      return prevState.map((prevData, mapIdx) =>
        mapIdx !== index
          ? prevData
          : {
              ...prevData,
              stateArr: prevData.stateArr.map((state, stateIdx) =>
                length + period - 11 === stateIdx ? "이동" : state
              ),
              memoArr: prevData.memoArr.map((memo, stateIdx) =>
                length + period - 11 === stateIdx ? className : memo
              )
            }
      );
    });

    dispatch(
      modifyAttendancesDataSaga({
        numbers: selectedNumbers,
        periods: period,
        state: "이동",
        memo: className
      })
    );
  };
  const onClick = () => {
    if (textData === "취소") {
      setText("출석");
      setIsMemoStateClick(false);
    } else if (!~disableState.findIndex(state => state === textData)) {
      setIsOpen(!isOpen);
    }
  };
  const handleClick = useCallback(e => {
    if (!e.target.closest(`.write-memo-${index}`)) {
      setIsWriteMemo(false);
      setIsClick(true);
    }
  }, []);

  const handleClickWriteMemo = useCallback(e => {
    if (!e.target.closest(`.select-memo-wrap-${index}`)) {
      setIsWriteMemo(false);
      setIsMemoStateClick(false);
      setText("출석");
    }
  }, []);
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
  useEffect(() => {
    if (isMemoStateClick) {
      document.addEventListener("click", handleClickWriteMemo);
      return () => {
        document.removeEventListener("click", handleClickWriteMemo);
      };
    }
  }, [isMemoStateClick]);

  return (
    <S.Container
      text={textData}
      isOpen={isOpen}
      onClick={onClick}
      className={`write-memo-${index}`}
    >
      <S.Wrap index={index}>
        {index <= 13 && <S.Item current={textData} value={textData} />}
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
        {index > 13 && <S.Item current={textData} value={textData} />}
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
          ? memo === null || memo.length === 0
            ? textData
            : memo
          : textData
        : ""}
      {isMemoStateClick && (
        <S.MemoWrap
          className={`select-memo-wrap-${index}`}
          onClick={stopBubling}
          index={index}
        >
          <MemoItem
            onWriteMemo={onWriteMemo}
            writeMemoByInput={writeMemoByInput}
          />
        </S.MemoWrap>
      )}
    </S.Container>
  );
};

export default React.memo(StateCell);
