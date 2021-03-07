import React from "react";
import SStdListGrid from "../SStdListGrid/SStdListGrid";
import * as S from "./styles";

const SStdListBody = props => {
  const { statsAttendance } = props;

  return (
    <S.Container>
      {statsAttendance.length
        ? statsAttendance.map((data, index) => (
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
        : "학생 데이터가 없습니다."}
    </S.Container>
  );
};

export default SStdListBody;
