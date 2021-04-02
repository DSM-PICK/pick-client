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

  if (todaySchedule === "club") {
    return (
      <S.Container>
        <S.LableHeader>
          <Label text={"학생 목록"} css={S.LabelCSS} />
        </S.LableHeader>
        <Background css={S.BackgroundCSS}>
          <NoScheduleWrap
            text="오늘은 일정이 없어요..."
            gif={NonScheduleGif}
            gifSize="53% 40% / 60%"
            textPadding="240px 0"
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
