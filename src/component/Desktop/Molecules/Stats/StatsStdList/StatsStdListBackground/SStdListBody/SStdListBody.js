import React from "react";
import SStdListGrid from "../SStdListGrid/SStdListGrid";
import * as S from "./styles";

const SStdListBody = props => {
  const { attendanceLists } = props;

  return (
    <S.Container>
      {attendanceLists.length
        ? attendanceLists.map((data, index) => (
            <SStdListGrid
              key={data.name}
              index={index}
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

export default SStdListBody;
