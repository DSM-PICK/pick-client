import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import BackgroundHeader from "../../../../component/Desktop/Molecules/Attendance/AttendancePlace/AttendancePlaceBackground/BackgroundHeader/BackgroundHeader";
import { DAttendanceActionCreater } from "../../../../module/action/d_attendance";

const DAPBackgroundHeaderContainer = props => {
  const { teacherName } = props;
  const [withoutGrantedClass, setWithoutGrantedClass] = useState(true);
  const selectAttendanceArr = useSelector(
    state => state.dAttendance.selectAttendanceArr
  );
  const selectSchedule = useSelector(state => state.toggle.selectSchedule);

  const managedClub = JSON.parse(localStorage.getItem("managedClub"));
  const managedClassroom = JSON.parse(localStorage.getItem("managedClassroom"));
  const managedInfo =
    selectSchedule === "교실자습" ? managedClassroom : managedClub;

  console.log(withoutGrantedClass, managedInfo);
  console.log(!withoutGrantedClass, !managedInfo);

  if (!withoutGrantedClass && !managedInfo) {
    setWithoutGrantedClass(true);
  }
  if (withoutGrantedClass && !!managedInfo) {
    setWithoutGrantedClass(false);
  }

  const getManagedInfo = useCallback(manage => {
    return {
      name: manage.name,
      floor: manage.floor,
      priority: manage.priority
    };
  }, []);

  const { name: locationName, floor, priority } = withoutGrantedClass
    ? { name: "", floor: "", priority: "" }
    : getManagedInfo(managedInfo);

  const scheduleMap = {
    교실자습: "self-study",
    전공동아리: "club"
  };

  const dispatch = useDispatch();
  const {
    getAttendanceStdDataSaga,
    setCurrentAttendanceIndexArr,
    getSelectAttendanceArrSaga
  } = DAttendanceActionCreater;

  const currentIndexArrFloor = 4 - floor;
  const currentIndexArrPriority =
    selectAttendanceArr.length &&
    selectAttendanceArr.filter(dataObj => dataObj.priority === priority)[0]
      ?.priority;

  const onClickFastSearchBtn = useCallback(() => {
    dispatch(
      getAttendanceStdDataSaga({
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
      setCurrentAttendanceIndexArr([
        currentIndexArrFloor,
        currentIndexArrPriority
      ])
    );
  }, [
    dispatch,
    selectSchedule,
    floor,
    priority,
    currentIndexArrFloor,
    currentIndexArrPriority
  ]);
  return (
    <BackgroundHeader
      locationName={locationName}
      teacherName={teacherName}
      onClickFastSearchBtn={onClickFastSearchBtn}
      withoutGrantedClass={withoutGrantedClass}
    />
  );
};

export default React.memo(DAPBackgroundHeaderContainer);
