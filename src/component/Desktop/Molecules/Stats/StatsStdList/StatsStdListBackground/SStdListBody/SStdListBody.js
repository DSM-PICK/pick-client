import React from "react";
import { NonScheduleGif } from "../../../../../../../asset/Desktop";
import NoScheduleWrap from "../../../../../../NoScheduleWrap/NoScheduleWrap";
import SStdListGrid from "../SStdListGrid/SStdListGrid";
import * as S from "./styles";

const SStdListBody = props => {
  const { statsAttendance } = props;

  if (!statsAttendance.length) {
    return (
      <NoScheduleWrap
        text="선택하신 날은 데이터가 없어요..."
        gif={NonScheduleGif}
        gifSize="53% 40% / 60%"
        textPadding="0"
      />
    );
  }

  return (
    <S.Container>
      {statsAttendance.map((data, index) => (
        <SStdListGrid
          key={data.gradeClassNumber}
          index={index}
          name={data.name}
          stdNum={data.gradeClassNumber}
          stateList={data.state}
          reason={data.reason}
          memo={data.memo}
          css={S.StdListGridCSS}
        />
      ))}
    </S.Container>
  );
};

export default SStdListBody;
