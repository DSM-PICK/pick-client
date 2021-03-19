import React from "react";
import StdListGrid from "../StdListGrid/StdListGrid";
import * as S from "./styles";

const StdListBody = props => {
  const { attendanceLists } = props;

  return (
    <S.Container>
      {attendanceLists.length
        ? attendanceLists.map((data, index) => (
            <StdListGrid
              key={data.name}
              index={index}
              name={data.name}
              stdNum={data.gradeClassNumber}
              stateList={data.state}
              memo={data.memo}
              reason={data.reason}
              css={S.StdListGridCSS}
            />
          ))
        : ""}
    </S.Container>
  );
};

export default React.memo(StdListBody);
