import React, { useState, useEffect, useCallback } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import Main from "../../../component/Desktop/Templates/Main/Main";
import { getManagedInfo, makeDate2Digit } from "../../../lib/attendanceApi";
import {
  checkIsLogin,
  requestGetApiWithAccessToken
} from "../../../lib/requestApi";
import { ATTENDANCE } from "../../../lib/requestUrl";
import { DAttendanceActionCreater } from "../../../module/action/d_attendance";
import { setTodaySchedule } from "../../../module/action/schedule";

const DesktopMainContainer = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [login, setLogin] = useState(false);
  checkIsLogin().then(isLogin => {
    if (!isLogin) {
      alert("로그인 후 이용하실 수 있습니다.");
      history.push("/auth");
    }
    setLogin(true);
  }, []);

  const {
    setManagedInfo,
    setFirstScheduleAttendanceArr,
    setFirstScheduleAttendanceArrSaga,
    getMemoFloorDataSaga,
    getFloorDataSaga
  } = DAttendanceActionCreater;
  const managedClassroom = JSON.parse(localStorage.getItem("managedClassroom"));
  const managedClub = JSON.parse(localStorage.getItem("managedClub"));

  const dispatchSetFirstScheduleAttendanceArrSaga = useCallback(() => {
    dispatch(setFirstScheduleAttendanceArrSaga());
  }, [dispatch]);

  const getTodaySchedule = async () => {
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const REQUEST_URL = ATTENDANCE.ACTIVITY_BY_DATE_URL(
      `${year}-${makeDate2Digit(month)}-${makeDate2Digit(day)}`
    );

    const res = await requestGetApiWithAccessToken(REQUEST_URL);

    return res;
  };
  const dispatchSetTodaySchedule = async () => {
    const res = await getTodaySchedule();
    dispatch(setTodaySchedule(res.data.schedule));
  };
  const setFirst = async () => {
    const selfStudyOrAfterSchoolArr = ["self-study", "after-school"];
    const res = await getTodaySchedule();
    const todaySchedule = res.data.schedule;
    const REQUEST_URL_CLUB = ATTENDANCE.ATTENDANCE_NAVIGATION_URL("club", 4);
    const REQUEST_URL_CLASS = ATTENDANCE.ATTENDANCE_NAVIGATION_URL(
      !!~selfStudyOrAfterSchoolArr.findIndex(
        schedule => schedule === todaySchedule
      )
        ? todaySchedule
        : "self-study",
      4
    );

    const res_club = await requestGetApiWithAccessToken(REQUEST_URL_CLUB);
    const res_class = await requestGetApiWithAccessToken(REQUEST_URL_CLASS);

    setFirstScheduleAttendanceArr({
      club: res_club.data.locations,
      class: res_class.data.locations
    });
  };

  const dispatchGetMemoFloorData = useCallback(() => {
    dispatch(getMemoFloorDataSaga());
  }, [dispatch]);
  const dispatchGetFloorDataSaga = useCallback(
    todaySchedule => {
      dispatch(getFloorDataSaga({ todaySchedule }));
    },
    [dispatch]
  );

  const useEffectFunc = async () => {
    const res = await getTodaySchedule();
    const todaySchedule = res.data.schedule;
    dispatchGetFloorDataSaga(todaySchedule);
  };

  useEffect(() => {
    useEffectFunc();
  }, []);

  useEffect(() => {
    setFirst();
    dispatchSetTodaySchedule();
    dispatchSetFirstScheduleAttendanceArrSaga();
    dispatchGetMemoFloorData();
    dispatch(setManagedInfo(getManagedInfo(managedClassroom, managedClub)));
  }, [dispatch]);

  if (!login) {
    return <div></div>;
  }

  return <Main />;
};

export default React.memo(DesktopMainContainer);
