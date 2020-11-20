import React from "react";
import * as S from "./styles";
import PreAbsenceLabel from "../../../Atoms/Label/PreAbsenceLabel/PreAbsenceLabel";
import WaterDropWrap from "../../../Atoms/Wrap/WaterDropWrap/WaterDropWrap";
import AttendanceFloorWrap from "../../../Molecules/Wrap/AttendanceFloorWrap/AttendanceFloorWrap";

const AttendanceStats = () => {
  const WaterDropWrapCSS = {
    width: "100%",
    height: "100%",
    padding: "20px 24px",
    radiusSize: "30px",
    placeContent: "start stretch"
  };

  return (
    <S.Container>
      <PreAbsenceLabel text={"출석 통계"} />
      <WaterDropWrap css={WaterDropWrapCSS}>
        <AttendanceFloorWrap text={"4층"} />
        <AttendanceFloorWrap text={"3층"} />
        <AttendanceFloorWrap text={"2층"} />
        <AttendanceFloorWrap text={"창조실"} />
      </WaterDropWrap>
    </S.Container>
  );
};

export default AttendanceStats;
