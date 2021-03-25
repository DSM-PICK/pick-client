import React, { useCallback, useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AttendancePlace from "../../../../component/Desktop/Molecules/Temp/AttendancePlace/AttendancePlace";
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
    setCurrentAttendanceIndexArr
  } = DAttendanceActionCreater;

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

  const getIsFirst = useCallback(() => isFirst, [isFirst]);
  const getFirstScheduleAttendanceArr = useCallback(
    () => firstScheduleAttendanceArr,
    [firstScheduleAttendanceArr]
  );

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

  useEffect(() => {
    setIsFirst(false);
    !getIsFirst() &&
      dispatch(
        getAttendanceStdDataSaga({
          schedule: selectSchedule === "전공동아리" ? "club" : "self-study",
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
