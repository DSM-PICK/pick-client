import React from "react";
import { useDesktopReportState } from "../../../../../lib/hooks/desktop/report";
import * as S from "../../styles";

const Description = () => {
  const { state, setState } = useDesktopReportState();
  const { description } = state;
  const { setDescription } = setState;
  const descriptionChangeHandler = event => {
    setDescription(event.target.value);
  };
  return (
    <S.FormColumn>
      <S.FormText>비고</S.FormText>
      <S.FormDescriptionInput
        value={description}
        onChange={descriptionChangeHandler}
        placeholder="최대 8글자로 작성해 주세요(선택)"
      />
    </S.FormColumn>
  );
};

export default Description;
