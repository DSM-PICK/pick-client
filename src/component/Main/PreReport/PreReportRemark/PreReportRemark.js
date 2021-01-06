import React from "react";
import * as S from "./styles";

const PreReportRemark = props => {
  const { remark } = props;
  const { onChangeRemark } = props;

  return (
    <S.Container>
      <S.Input value={remark} onChange={e => onChangeRemark(e)} />
    </S.Container>
  );
};

export default PreReportRemark;
