import React from "react";
import StdListGrid from "../StdListGrid/StdListGrid";
import * as S from "./styles";

const StdListHeader = () => {
  const name = "학생";
  const attendanceList = ["7교시", "8교시", "9교시", "10교시"];
  const memo = "비고";

  return (
    <S.Container>
      <StdListGrid
        name={name}
        attendanceList={attendanceList}
        memo={memo}
        css={S.StdListGridCSS}
      />
    </S.Container>
  );
};

export default StdListHeader;
