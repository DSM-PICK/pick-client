import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import ScheduleContainer from "./container/Schedule/ScheduleContainer";
import AttendanceContainer from "./container/Attendance/AttendanceContainer";
import IndexContainer from "./container/Index/IndexContainer";
import AdminRouting from "./component/Admin/AdminRouting";
import MainContainer from "./container/Main/MainContainer";

function checkDesktop() {
  const { userAgent } = window.navigator;
  const { pathname } = window.location;
  if (
    (userAgent.includes("Win64") || userAgent.includes("Win32")) &&
    !pathname.includes("admin")
  ) {
    return true;
  }
  return false;
}

const Routing = () => {
  const [isChecked, setIsChecked] = useState(false);
  // useEffect(() => {
  //   if (checkDesktop()) {
  //     alert("데스크랍은 이용할 수 없습니다. \n모바일로 접속해 주세요");
  //     window.history.back();
  //   }
  //   setIsChecked(true);
  // }, []);
  return (
    <Switch>
      {/* {isChecked && ( */}
      <>
        <Route exact path="/" component={IndexContainer} />
        <Route exact path="/schedule" component={ScheduleContainer} />
        <Route exact path="/main" component={MainContainer} />

        <Route path="/attendance" component={AttendanceContainer} />
        <Route path="/admin" component={AdminRouting} />
      </>
      )}
    </Switch>
  );
};

export default Routing;
