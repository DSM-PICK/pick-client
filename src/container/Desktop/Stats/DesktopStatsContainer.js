import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import StatsPage from "../../../component/Desktop/Templates/StatsPage/StatsPage";
import { getManagedInfo } from "../../../lib/attendanceApi";
import {
  checkIsLogin,
  requestGetApiWithAccessToken
} from "../../../lib/requestApi";
import { ATTENDANCE } from "../../../lib/requestUrl";
import { DStatsActionCreater } from "../../../module/action/d_stats";

const DesktopStatsContainer = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const managedInfo = useSelector(state => state.dStats.managedInfo);

  const [login, setLogin] = useState(false);

  const {
    setManagedInfo,
    setFirstScheduleAttendanceArr,
    getFirstScheduleAttendanceArrSaga
  } = DStatsActionCreater;

  const managedClassroom = JSON.parse(localStorage.getItem("managedClassroom"));
  const managedClub = JSON.parse(localStorage.getItem("managedClub"));

  checkIsLogin().then(isLogin => {
    if (!isLogin) {
      alert("로그인 후 이용하실 수 있습니다.");
      history.push("/auth");
    }
    setLogin(true);
  }, []);

  const dispatchGetFirstScheduleAttendanceArrSaga = useCallback(() => {
    dispatch(getFirstScheduleAttendanceArrSaga());
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
    dispatchGetFirstScheduleAttendanceArrSaga();
    dispatch(setManagedInfo(getManagedInfo(managedClassroom, managedClub)));
  }, [dispatch]);

  useEffect(() => {
    const { getManagedFloorDataSaga } = DStatsActionCreater;
    if (!managedInfo.club.isUngranted) {
      const { floor } = managedInfo.club.data[0];
      dispatch(
        getManagedFloorDataSaga({
          floor,
          schedule: "club"
        })
      );
    }
    if (!managedInfo.class.isUngranted) {
      const { floor } = managedInfo.class.data;
      dispatch(
        getManagedFloorDataSaga({
          floor,
          schedule: "self-study"
        })
      );
    }
  }, [managedInfo]);

  if (!login) {
    return <div></div>;
  }

  return <StatsPage />;
};

export default DesktopStatsContainer;
