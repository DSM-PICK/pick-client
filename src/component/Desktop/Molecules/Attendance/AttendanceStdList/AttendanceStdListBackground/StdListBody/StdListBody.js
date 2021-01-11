import React from "react";
import StdListGrid from "../StdListGrid/StdListGrid";
import * as S from "./styles";

const StdListBody = () => {
  const attendanceLists = [
    {
      name: "2415 유시온",
      attendanceList: ["출석", "취업", "귀가", "이동"],
      memo: "읭"
    }
  ];

  return (
    <S.Container>
      {attendanceLists.map(data => (
        <StdListGrid
          key={data.name}
          name={data.name}
          attendanceList={data.attendanceList}
          memo={data.memo}
          css={S.StdListGridCSS}
        />
      ))}
    </S.Container>
  );
};

export default StdListBody;
