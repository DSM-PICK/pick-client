import React from "react";
import AttendanceAnchor from "./anchor/AttendanceAnchor";
import Body from "../../Body/Body";
import { ClubPng, ClassPng } from "../../../asset";

const AttendanceBody = props => {
  const { anchorItems, mode } = props;

  const pngArr = [ClubPng, ClassPng];

  return (
    <Body mode={mode}>
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
