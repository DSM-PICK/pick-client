import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import BackgroundHeader from "../../../../component/Desktop/Molecules/Attendance/AttendancePlace/AttendancePlaceBackground/BackgroundHeader/BackgroundHeader";
import { DAttendanceActionCreater } from "../../../../module/action/d_attendance";

const DAPBackgroundHeaderContainer = props => {
  const { teacherName } = props;
  const selectSchedule = useSelector(state => state.toggle.selectSchedule);
  const strManagedInfo = useSelector(state => state.dAttendance.managedInfo);
  const managedClassFloorData = useSelector(
    state => state.dAttendance.managedClassFloorData
  );
  const managedClubFloorData = useSelector(
    state => state.dAttendance.managedClubFloorData
  );

  const [currentIndexArrPriority, setCurrentIndexArrPriority] = useState("");

  const isScheduleClass = selectSchedule === "교실자습" ? true : false;
  const [isClubUngranted, isClassUngranted] = Object.values(strManagedInfo).map(
    info => info.isUngranted
  );
  const nowUngranted = isScheduleClass ? isClassUngranted : isClubUngranted;
  const grantedClass = nowUngranted
    ? null
    : isScheduleClass
    ? strManagedInfo.class.data
    : strManagedInfo.club.data[0];

  const getManagedInfo = useCallback(manage => {
    return {
      name: manage.name,
      floor: manage.floor,
      priority: manage.priority
    };
  }, []);

  const { name: locationName, floor, priority } = nowUngranted
    ? { name: "", floor: "", priority: "" }
    : getManagedInfo(grantedClass);

  const scheduleMap = {
    교실자습: "self-study",
    전공동아리: "club"
  };

  const dispatch = useDispatch();
  const {
    setIsFastClick,
    getAttendanceStdDataSaga,
    setCurrentAttendanceIndexArr,
    getSelectAttendanceArrSaga,
    setCurrentClassPriority
  } = DAttendanceActionCreater;

  const currentIndexArrFloor = 4 - floor;

  useEffect(() => {
    setCurrentIndexArrPriority(
      selectSchedule === "교실자습"
        ? managedClassFloorData
            .map((data, index) => (data.priority === priority ? index : false))
            .filter(_ => _ !== false)[0]
        : managedClubFloorData
            .map((data, index) => (data.priority === priority ? index : false))
            .filter(_ => _ !== false)[0]
    );
  }, [managedClassFloorData, managedClubFloorData, selectSchedule, priority]);

  const onClickFastSearchBtn = () => {
    dispatch(setIsFastClick(true));
    dispatch(
      setCurrentClassPriority({
        floor,
        priority,
        schedule: scheduleMap[selectSchedule]
      })
    );
    dispatch(
      getSelectAttendanceArrSaga({
        schedule: scheduleMap[selectSchedule],
        floor: floor
      })
    );
    dispatch(
      getAttendanceStdDataSaga({
        floor,
        priority,
        schedule: scheduleMap[selectSchedule]
      })
    );
    dispatch(
      setCurrentAttendanceIndexArr([
        currentIndexArrFloor,
        currentIndexArrPriority
      ])
    );
  };
  return (
    <BackgroundHeader
      locationName={locationName}
      teacherName={teacherName}
      onClickFastSearchBtn={onClickFastSearchBtn}
      nowUngranted={nowUngranted}
    />
  );
};

export default React.memo(DAPBackgroundHeaderContainer);
