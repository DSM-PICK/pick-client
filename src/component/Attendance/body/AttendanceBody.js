import React, { useCallback } from "react";
import AttendanceAnchor from "./anchor/AttendanceAnchor";
import Body from "../../Body/Body";
import { useDispatch } from "react-redux";
import { getClubFloorDataSaga } from "../../../module/action/attendance";

const AttendanceBody = props => {
  const { anchorItems } = props;

  const dispatch = useDispatch();
  const clubFloorDataGet = useCallback(() => dispatch(getClubFloorDataSaga()), [
    dispatch
  ]);

  return (
    <Body>
      {anchorItems.map(anchorItems => (
        <AttendanceAnchor
          onClick={clubFloorDataGet()}
          key={anchorItems.link}
          text={anchorItems.text}
          imgLink={anchorItems.imgLink}
          link={anchorItems.link}
        />
      ))}
    </Body>
  );
};

export default AttendanceBody;
