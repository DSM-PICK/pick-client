import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import BackgroundHeader from "../../../../component/Desktop/Molecules/Attendance/AttendancePlace/AttendancePlaceBackground/BackgroundHeader/BackgroundHeader";
import { DAttendanceActionCreater } from "../../../../module/action/d_attendance";

const DAPBackgroundHeaderContainer = props => {
  const { teacherName } = props;

  const selectSchedule = useSelector(state => state.toggle.selectSchedule);

  const managedClub = JSON.parse(localStorage.getItem("managedClub"));
  const managedClassroom = JSON.parse(localStorage.getItem("managedClassroom"));
  const managedInfo =
    selectSchedule === "교실자습" ? managedClassroom : managedClub;
  const { name: locationName, floor, priority } = managedInfo;
  const scheduleMap = {
    교실자습: "self-study",
    전공동아리: "club"
  };

  const dispatch = useDispatch();
  const { getAttendanceStdDataSaga } = DAttendanceActionCreater;
  const onClickFastSearchBtn = useCallback(() => {
    dispatch(
      getAttendanceStdDataSaga({
        floor,
        priority,
        schedule: scheduleMap[selectSchedule]
      })
    );
  }, [dispatch]);

  return (
    <BackgroundHeader
      locationName={locationName}
      teacherName={teacherName}
      onClickFastSearchBtn={onClickFastSearchBtn}
    />
  );
};

export default DAPBackgroundHeaderContainer;
