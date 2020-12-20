import React, { useCallback, useEffect, useRef, useState } from "react";
import * as S from "./styles";
import NameSelect from "./NameSelect/NameSelect";
import { useDispatch, useSelector } from "react-redux";
import { getAutoCompleteTextSaga } from "../../../../module/action/auto_complete";
import {
  setPreReportAutoCompleteText,
  setPreReportText
} from "../../../../module/action/pre_report";

const PreReportName = () => {
  const [selectedNameIndex, setSelectedNameIndex] = useState(-1);
  const nameText = useSelector(state => state.preReport.text);
  const names = useSelector(state => state.preReport.autoComplete);

  const EXNAME_HEIGHT = 30;
  const nameSelectRef = useRef();

  const dispatch = useDispatch();

  const setNameComplete = useCallback(() => {
    dispatch(setPreReportText(names[selectedNameIndex]));
  }, [names, dispatch, selectedNameIndex]);
  const initAutoCompleteText = useCallback(() => {
    dispatch(setPreReportAutoCompleteText(""));
  }, [dispatch]);
  const onChangeName = useCallback(
    e => {
      dispatch(setPreReportText(e.target.value));
      dispatch(getAutoCompleteTextSaga(e.target.value));
      if (e.target.value === "") {
        setSelectedNameIndex(-1);
      }
    },
    [dispatch]
  );
  const handleKeyDown = useCallback(
    e => {
      if (e.key === "ArrowDown") {
        console.log(e.key);
        e.preventDefault();
        if (!!names.length) {
          onKeyDownArrowDown();
        }
      } else if (e.key === "ArrowUp") {
        console.log(e.key);
        e.preventDefault();
        if (!!names.length) {
          onKeyDownArrowUp();
        }
      } else if (e.key === "Enter") {
        console.log(e.key);
        e.preventDefault();
        if (!!names.length) {
          onKeyDownEnter();
        }
      }
    },
    [names, selectedNameIndex]
  );
  const onKeyDownArrowDown = useCallback(() => {
    if (selectedNameIndex === -1) {
      setSelectedNameIndex(0);
    } else if (selectedNameIndex === names.length - 1) {
      setSelectedNameIndex(0);
      nameSelectRef.current.scrollTo(0, 0);
    } else {
      nameSelectRef.current.scrollTo(
        0,
        EXNAME_HEIGHT * (selectedNameIndex + 1)
      );
      setSelectedNameIndex(selectedNameIndex + 1);
    }
  }, [names, selectedNameIndex]);
  const onKeyDownArrowUp = useCallback(() => {
    if (selectedNameIndex === -1) {
    } else if (selectedNameIndex === 0) {
      setSelectedNameIndex(names.length - 1);
      nameSelectRef.current.scrollTo(0, EXNAME_HEIGHT * (names.length - 1));
    } else {
      nameSelectRef.current.scrollTo(
        0,
        EXNAME_HEIGHT * (selectedNameIndex - 1)
      );
      setSelectedNameIndex(selectedNameIndex - 1);
    }
  }, [names, selectedNameIndex]);
  const onKeyDownEnter = useCallback(() => {
    if (selectedNameIndex === -1) {
    } else {
      setNameComplete();
      initAutoCompleteText();
      console.log(`selected name : "${names[selectedNameIndex]}"`);
    }
  }, [names, selectedNameIndex]);

  useEffect(() => {
    setSelectedNameIndex(-1);
  }, [names]);

  console.log(nameText);

  return (
    <S.Container>
      <S.Name
        value={nameText}
        onChange={e => onChangeName(e)}
        onKeyDown={e => handleKeyDown(e)}
      />
      <NameSelect
        nameSelectRef={nameSelectRef}
        selectedNameIndex={selectedNameIndex}
      />
    </S.Container>
  );
};

export default PreReportName;
