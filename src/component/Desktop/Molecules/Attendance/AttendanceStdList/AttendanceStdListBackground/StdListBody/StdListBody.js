import React from "react";
import StdListGrid from "../StdListGrid/StdListGrid";
import * as S from "./styles";

const StdListBody = props => {
  const { attendanceLists } = props;

  return (
    <S.Container>
      {attendanceLists.length &&
        attendanceLists.map(data => {
          console.log(data);
          return (
            <StdListGrid
              key={data.name}
              name={data.name}
              stateList={data.state}
              memo={data.memo}
              css={S.StdListGridCSS}
            />
          );
        })}
    </S.Container>
  );
};

export default StdListBody;
