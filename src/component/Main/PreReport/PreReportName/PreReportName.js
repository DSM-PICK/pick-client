import React, { useCallback, useState } from "react";
import * as S from "./styles";
import NameSelect from "./NameSelect/NameSelect";
import { useDispatch, useSelector } from "react-redux";
import { getAutoCompleteTextSaga } from "../../../../module/action/auto_complete";
import { setPreReportText } from "../../../../module/action/pre_report";

const PreReportName = () => {
  const [selectedNameIndex, setSelectedNameIndex] = useState(-1);
  const nameText = useSelector(state => state.preReport.text);

  const dispatch = useDispatch();

  const onChangeName = useCallback(
    e => {
      dispatch(setPreReportText(e.target.value));
      dispatch(getAutoCompleteTextSaga(e.target.value));
    },
    [dispatch]
  );
  const handleKeyDown = useCallback(e => {
    if (e.key === "ArrowDown") {
      console.log(e.key);
    } else if (e.key === "ArrowUp") {
      console.log(e.key);
    } else if (e.key === "Enter") {
      console.log(e.key);
    }
  });

  return (
    <S.Container>
      <S.Name
        value={nameText}
        onChange={e => onChangeName(e)}
        onKeyDown={e => handleKeyDown(e)}
      />
      <NameSelect selectedNameIndex={selectedNameIndex} />
    </S.Container>
  );
};

export default PreReportName;
