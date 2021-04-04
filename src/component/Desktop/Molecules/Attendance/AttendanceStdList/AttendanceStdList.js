import React from "react";
import * as S from "./styles";
import Label from "../../../Atoms/Label/Label";
import Background from "../../../Atoms/Background/Background";
import AttendanceStdListBackground from "./AttendanceStdListBackground/AttendanceStdListBackground";
import { useSelector } from "react-redux";
import { NonScheduleGif } from "../../../../../asset/Desktop";
import NoScheduleWrap from "../../../../NoScheduleWrap/NoScheduleWrap";

const AttendanceStdList = () => {
  const todaySchedule = useSelector(state => state.schedule.todaySchedule);

  if (todaySchedule === "non-schedule") {
    return (
      <S.Container>
        <S.LableHeader>
          <Label text={"학생 목록"} css={S.LabelCSS} />
        </S.LableHeader>
        <Background css={S.BackgroundCSS}>
          <NoScheduleWrap
            text={"오늘은 일정이 없습니다."}
            gif={NonScheduleGif}
          />
        </Background>
      </S.Container>
    );
  }

  return (
    <S.Container>
      <S.LableHeader>
        <Label text={"학생 목록"} css={S.LabelCSS} />
      </S.LableHeader>
      <Background css={S.BackgroundCSS}>
        <AttendanceStdListBackground />
      </Background>
    </S.Container>
  );
};

export default React.memo(AttendanceStdList);
