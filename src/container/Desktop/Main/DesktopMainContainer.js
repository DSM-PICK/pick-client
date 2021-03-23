import React, { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import Main from "../../../component/Desktop/Templates/Main/Main";
import { getManagedInfo } from "../../../lib/attendanceApi";
import {
  checkIsLogin,
  requestGetApiWithAccessToken
} from "../../../lib/requestApi";
import { ATTENDANCE } from "../../../lib/requestUrl";
import { DAttendanceActionCreater } from "../../../module/action/d_attendance";

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
    setFirstScheduleAttendanceArrSaga
  } = DAttendanceActionCreater;
  const managedClassroom = JSON.parse(localStorage.getItem("managedClassroom"));
  const managedClub = JSON.parse(localStorage.getItem("managedClub"));

  const dispatchSetFirstScheduleAttendanceArrSaga = useCallback(() => {
    dispatch(setFirstScheduleAttendanceArrSaga());
  }, [dispatch]);

  const setFirst = useCallback(async () => {
    const REQUEST_URL_CLUB = ATTENDANCE.ATTENDANCE_NAVIGATION_URL("CLUB", 4);
    const REQUEST_URL_CLASS = ATTENDANCE.ATTENDANCE_NAVIGATION_URL(
      "SELF_STUDY",
      4
    );
    const res_club = await requestGetApiWithAccessToken(REQUEST_URL_CLUB);
    const res_class = await requestGetApiWithAccessToken(REQUEST_URL_CLASS);

    setFirstScheduleAttendanceArr({
      club: res_club.data.locations,
      class: res_class.data.locations
    });
  }, []);

  useEffect(() => {
    setFirst();
    dispatchSetFirstScheduleAttendanceArrSaga();
    dispatch(setManagedInfo(getManagedInfo(managedClassroom, managedClub)));
  }, []);

  if (!login) {
    return <div></div>;
  }

  return <Main />;
};

export default React.memo(DesktopMainContainer);
