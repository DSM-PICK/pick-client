import React, { useState } from "react";
import * as S from "./styles";
import ExName from "./ExName/ExName";
import PreReportModal from "../../PreReportDate/PreReportModal/PreReportModal";

const NameSelect = () => {
  const names = [];

  return (
    <S.Container names={names}>
      {names && names.map(name => <ExName key={name.name} name={name} />)}
    </S.Container>
  );
};

export default NameSelect;
