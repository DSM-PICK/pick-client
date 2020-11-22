import React from "react";
import * as S from "./styles";
import PreAbsenceLabel from "../../../Atoms/Label/PreAbsenceLabel/PreAbsenceLabel";
import WaterDropWrap from "../../../Atoms/Wrap/WaterDropWrap/WaterDropWrap";
import AttendanceFloorWrap from "../../../Molecules/Wrap/AttendanceFloorWrap/AttendanceFloorWrap";
import AttendanceStatsBtnWrap from "../../../Molecules/Wrap/AttendanceStatsBtnWrap/AttendanceStatsBtnWrap";

const AttendanceStats = () => {
  const CONSTANT_ARR = [
    {
      floorText: "4층",
      clubArr: [{}]
    },
    {
      floorText: "3층",
      clubArr: [
        {
          priority: "/",
          clubName: "UP",
          clubMembers: [{ text: "2415 유시온", state: "" }]
        }
      ]
    },
    {
      floorText: "2층",
      clubArr: [
        {
          priority: "/",
          clubName: "시나브로",
          clubMembers: [{ text: "2203 김해린", state: "" }]
        },
        {
          priority: "",
          clubName: "GRAM",
          clubMembers: [
            { text: "2202 김민석", state: "" },
            { text: "2202 김민석", state: "" },
            { text: "2202 김민석", state: "" },
            { text: "2202 김민석", state: "" },
            { text: "2215 이가영", state: "" }
          ]
        },
        {
          priority: "",
          clubName: "Unlimited",
          clubMembers: [{ text: "2109 배현호", state: "" }]
        }
      ]
    },
    {
      floorText: "창조실",
      clubArr: [{}]
    }
  ];

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
        {CONSTANT_ARR.map(CONSTANT_DATA => (
          <AttendanceFloorWrap
            key={CONSTANT_DATA.floorText}
            text={CONSTANT_DATA.floorText}
          >
            {CONSTANT_DATA.clubArr[0].to &&
              CONSTANT_DATA.clubArr.map(clubData => (
                <AttendanceStatsBtnWrap data={clubData} />
              ))}
          </AttendanceFloorWrap>
        ))}
      </WaterDropWrap>
    </S.Container>
  );
};

export default AttendanceStats;
