import React, { useCallback } from "react";
import AttendanceAnchor from "./anchor/AttendanceAnchor";
import Body from "../../Body/Body";
import { ClassPng, ClubPng } from "../../../asset";
import { useDispatch } from "react-redux";
import { getAttendanceStdDataSaga } from "../../../module/action/attendance";

const AttendanceBody = props => {
  const { anchorItems, ismain } = props;

  const pngArr = [ClassPng, ClubPng];

  return (
    <Body ismain={ismain}>
      {anchorItems.map((anchorItems, index) => (
        <AttendanceAnchor
          key={anchorItems.link}
          text={anchorItems.text}
          imgLink={
            anchorItems.imgLink === "" ? anchorItems.imgLink : pngArr[index]
          }
          link={anchorItems.link}
        />
      ))}
    </Body>
  );
};

export default AttendanceBody;
