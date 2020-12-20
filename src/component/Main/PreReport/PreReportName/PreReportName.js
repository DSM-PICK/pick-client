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
  const [viewIndex, setViewIndex] = useState(-1);
  const nameText = useSelector(state => state.preReport.text);
  const names = useSelector(state => state.preReport.autoComplete);

  const MAX_VIEW_INDEX = 6;
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
      switch (e.key) {
        case "ArrowDown": {
          e.preventDefault();
          if (!!names.length) {
            onKeyDownArrowDown();
          }
          break;
        }
        case "ArrowUp": {
          e.preventDefault();
          if (!!names.length) {
            onKeyDownArrowUp();
          }
          break;
        }
        case "Enter": {
          e.preventDefault();
          if (!!names.length) {
            onKeyDownEnter();
          }
          break;
        }
      }
    },
    [names, selectedNameIndex]
  );

  const increaseViewIndexUntilMax = useCallback(() => {
    if (viewIndex < MAX_VIEW_INDEX - 1) {
      setViewIndex(viewIndex + 1);
    }
  }, [viewIndex]);
  const decreaseViewIndexUntilZero = useCallback(() => {
    if (viewIndex > 0) {
      setViewIndex(viewIndex - 1);
    }
  }, [viewIndex]);

  const onKeyDownArrowDown = useCallback(() => {
    if (selectedNameIndex === -1) {
      setSelectedNameIndex(0);
      setViewIndex(0);
    } else if (selectedNameIndex === names.length - 1) {
      setSelectedNameIndex(0);
      setViewIndex(0);
      nameSelectRef.current.scrollTo(0, 0);
    } else if (viewIndex < MAX_VIEW_INDEX - 1) {
      setSelectedNameIndex(selectedNameIndex + 1);
      increaseViewIndexUntilMax();
    } else {
      nameSelectRef.current.scrollTo(
        0,
        EXNAME_HEIGHT * (selectedNameIndex - MAX_VIEW_INDEX + 2)
      );
      setSelectedNameIndex(selectedNameIndex + 1);
      increaseViewIndexUntilMax();
    }
  }, [names, selectedNameIndex]);

  const onKeyDownArrowUp = useCallback(() => {
    if (selectedNameIndex === -1) {
    } else if (selectedNameIndex === 0) {
      setSelectedNameIndex(names.length - 1);
      setViewIndex(Math.min(names.length - 1, 5));
      nameSelectRef.current.scrollTo(0, EXNAME_HEIGHT * (names.length - 1));
    } else if (viewIndex > 0) {
      setSelectedNameIndex(selectedNameIndex - 1);
      decreaseViewIndexUntilZero();
    } else {
      nameSelectRef.current.scrollTo(
        0,
        EXNAME_HEIGHT * (selectedNameIndex - viewIndex - 1)
      );
      setSelectedNameIndex(selectedNameIndex - 1);
      decreaseViewIndexUntilZero();
    }
  }, [names, selectedNameIndex]);

  const onKeyDownEnter = useCallback(() => {
    if (selectedNameIndex === -1) {
    } else {
      setNameComplete();
      initAutoCompleteText();
    }
  }, [names, selectedNameIndex]);

  useEffect(() => {
    setSelectedNameIndex(-1);
  }, [names]);

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
