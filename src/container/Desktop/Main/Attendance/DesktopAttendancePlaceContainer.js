import React, { useCallback, useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AttendancePlace from "../../../../component/Desktop/Molecules/Attendance/AttendancePlace/AttendancePlace";
import { requestGetApiWithAccessToken } from "../../../../lib/requestApi";
import { ATTENDANCE } from "../../../../lib/requestUrl";
import { DAttendanceActionCreater } from "../../../../module/action/d_attendance";
import { ToggleActionCreater } from "../../../../module/action/toggle";

const DesktopAttendancePlaceContainer = () => {
  const dispatch = useDispatch();
  const selectSchedule = useSelector(state => state.toggle.selectSchedule);
  const firstScheduleAttendanceArr = useSelector(
    state => state.dAttendance.firstScheduleAttendanceArr
  );
  const todaySchedule = useSelector(state => state.schedule.todaySchedule);

  const [isSelfStudy, setIsSelfStudy] = useState(true);
  const [isFirst, setIsFirst] = useState(true);
  const [firstScheduleAttArr, setFirstScheduleAttArr] = useState(
    firstScheduleAttendanceArr
  );

  const scheduleMap = {
    교실자습: "SELF_STUDY",
    전공동아리: "CLUB"
  };

  const {
    getSelectAttendanceArrSaga,
    getAttendanceStdDataSaga,
    setCurrentAttendanceIndexArr,
    setCurrentClassPriority
  } = DAttendanceActionCreater;

  const getIsFirst = useCallback(() => isFirst, [isFirst]);
  const setFirst = useCallback(async () => {
    const REQUEST_URL_CLUB = ATTENDANCE.ATTENDANCE_NAVIGATION_URL("CLUB", 4);
    const REQUEST_URL_CLASS = ATTENDANCE.ATTENDANCE_NAVIGATION_URL(
      "SELF_STUDY",
      4
    );
    const res_club = await requestGetApiWithAccessToken(REQUEST_URL_CLUB);
    const res_class = await requestGetApiWithAccessToken(REQUEST_URL_CLASS);
    setFirstScheduleAttArr({
      club: res_club.data.locations,
      class: res_class.data.locations
    });
  }, []);
  const getFirstScheduleAttendanceArr = useCallback(
    () => firstScheduleAttendanceArr,
    [firstScheduleAttendanceArr]
  );
  const dispatchSetCurrentClassPriority = useCallback(
    isSelfStudySchedule => {
      if (firstScheduleAttArr.club.length) {
        const selectScheduleData =
          firstScheduleAttArr[isSelfStudySchedule ? "class" : "club"];
        const selectSchedule = isSelfStudySchedule ? "self-study" : "club";

        dispatch(
          setCurrentClassPriority({
            schedule: selectSchedule,
            floor: 4,
            priority: selectScheduleData[0].priority
          })
        );
      }
    },
    [isSelfStudy, dispatch]
  );

  useEffect(() => {
    dispatchSetCurrentClassPriority(isSelfStudy);
  }, [isSelfStudy]);

  const dispatchGetSelectAttendanceArr = useCallback(
    schedule => {
      dispatch(
        getSelectAttendanceArrSaga({
          schedule: scheduleMap[schedule],
          floor: 4
        })
      );
    },
    [dispatch]
  );
  const setSelectSchedule = useCallback(
    schedule => {
      setIsSelfStudy(state => !state);
      dispatch(ToggleActionCreater.setSelectSchedule(schedule));
      dispatchGetSelectAttendanceArr(schedule);
      setCurrentArrByIndex([0, 0]);
    },
    [dispatch]
  );
  const setCurrentArrByIndex = useCallback(
    (row, col) => {
      dispatch(setCurrentAttendanceIndexArr(row, col));
    },
    [dispatch]
  );
  const getTodaySchedule = () => todaySchedule;

  useEffect(() => {
    setIsFirst(false);
    !getIsFirst() &&
      dispatch(
        getAttendanceStdDataSaga({
          schedule:
            selectSchedule === "전공동아리" ? "club" : getTodaySchedule(),
          // schedule: selectSchedule === "전공동아리" ? "club" : "self-study",
          floor: 4,
          priority:
            selectSchedule === "전공동아리"
              ? getFirstScheduleAttendanceArr().club[0].priority
              : getFirstScheduleAttendanceArr().class[0].priority
        })
      );
  }, [firstScheduleAttArr, selectSchedule, dispatch]);

  useEffect(() => {
    setFirst();
    setCurrentArrByIndex([0, 0]);
  }, []);

  return (
    <AttendancePlace
      selectSchedule={selectSchedule}
      setSelectSchedule={setSelectSchedule}
    />
  );
};

export default React.memo(DesktopAttendancePlaceContainer);
