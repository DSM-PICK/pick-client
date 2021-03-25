import React from "react";
import * as S from "./styles";

const PreReportReason = props => {
  const { reason } = props;
  const { onChangeReason } = props;

  return (
    <S.Container>
      <S.Input value={reason} onChange={e => onChangeReason(e)} />
    </S.Container>
  );
};

export default PreReportReason;
