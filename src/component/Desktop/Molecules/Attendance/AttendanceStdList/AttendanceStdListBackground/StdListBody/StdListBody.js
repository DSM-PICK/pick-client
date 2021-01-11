import React from "react";
import { useSelector } from "react-redux";
import StdListGrid from "../StdListGrid/StdListGrid";
import * as S from "./styles";

const StdListBody = props => {
  const { attendanceLists } = props;

  return (
    <S.Container>
      {attendanceLists.length
        ? attendanceLists.map(data => (
            <StdListGrid
              key={data.name}
              name={data.name}
              stdNum={data.gradeClassNumber}
              stateList={data.state}
              memo={data.memo}
              css={S.StdListGridCSS}
            />
          ))
        : ""}
    </S.Container>
  );
};

export default StdListBody;
