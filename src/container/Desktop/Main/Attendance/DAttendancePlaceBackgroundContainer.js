import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import AttendancePlaceBackground from "../../../../component/Desktop/Molecules/Attendance/AttendancePlace/AttendancePlaceBackground/AttendancePlaceBackground";
import { getFloor } from "../../../../lib/attendanceApi";
import { DAttendanceActionCreater } from "../../../../module/action/d_attendance";
import { staticSelectArr } from "./StaticData";

const DAttendancePlaceBackgroundContainer = () => {
  const dAttendance = useSelector(state => state.dAttendance);
  const {
    selectAttendanceArr: selectAttendance,
    currentAttendanceIndexArr: selectArrIndex
  } = dAttendance;
  const managedInfo = useSelector(state => state.dAttendance.managedInfo);
  const isFastClick = useSelector(state => state.dAttendance.isFastClick);
  const selectSchedule = useSelector(state => state.toggle.selectSchedule);
  const todaySchedule = useSelector(state => state.schedule.todaySchedule);
  const selectSelfStudyOrClub =
    staticSelectArr[selectSchedule === "교실자습" ? "selfStudy" : "club"];
  const selectPriority = selectAttendance[selectArrIndex[1]]?.priority;

  const { setIsFastClick, getAttendanceStdDataSaga } = DAttendanceActionCreater;

  const dispatch = useDispatch();

  const teacherName = localStorage.getItem("teacherName");

  const dispatchGetAttendanceStdData = useCallback(
    data => {
      dispatch(getAttendanceStdDataSaga(data));
    },
    [dispatch]
  );

  useEffect(() => {
    const {
      getManagedAttendanceArrSaga,
      getManagedClubAttendanceArrSaga
    } = DAttendanceActionCreater;
    if (!managedInfo.club.isUngranted) {
      const { floor } = managedInfo.club.data[0];
      dispatch(
        getManagedClubAttendanceArrSaga({
          floor,
          schedule: "club"
        })
      );
    }
    if (!managedInfo.class.isUngranted) {
      const { floor } = managedInfo.class.data;
      dispatch(
        getManagedAttendanceArrSaga({
          floor,
          schedule: "self-study"
        })
      );
    }
  }, [managedInfo]);

  const getDispatchGetAttendanceStdDataParameter = () => ({
    schedule: selectSchedule === "교실자습" ? todaySchedule : "club",
    floor: getFloor(selectSelfStudyOrClub.bodyItem[selectArrIndex[0]]),
    priority: selectPriority === undefined ? 0 : selectPriority
  });

  const disptchSetIsFastClick = useCallback(() => {
    dispatch(setIsFastClick(false));
  }, [dispatch]);

  const getIsFastClick = useCallback(() => isFastClick, [isFastClick]);

  useEffect(() => {
    if (!getIsFastClick()) {
      dispatchGetAttendanceStdData(getDispatchGetAttendanceStdDataParameter());
    } else {
      disptchSetIsFastClick();
    }
  }, []);

  return <AttendancePlaceBackground teacherName={teacherName} />;
};

export default React.memo(DAttendancePlaceBackgroundContainer);
