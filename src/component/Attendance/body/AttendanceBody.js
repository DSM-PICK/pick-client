import React from "react";
import AttendanceAnchor from "./anchor/AttendanceAnchor";
import Body from "../../Body/Body";
import { ClassPng, ClubPng } from "../../../asset";

const AttendanceBody = props => {
  const { anchorItems } = props;

  const pngArr = [ClassPng, ClubPng];
  const height = anchorItems.imgLink ? "auto" : "";

  const isMain = () => {
    return location.pathname === "/main" ? "main" : "none";
  };

  console.log(isMain());

  return (
    <Body ismain={isMain()}>
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
