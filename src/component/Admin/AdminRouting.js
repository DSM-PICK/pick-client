import React, { useEffect, useState } from "react";
import * as S from "./styles";
import { Switch, Route } from "react-router-dom";
import AdminMain from "./AdminMain/AdminMain";
import AdminClub from "./AdminClub/AdminClub";
import AdminPrint from "./AdminPrint/AdminPrint";
import AdminNav from "./AdminNav/AdminNav";
import AdminClubListContainer from "../../container/Admin/club/AdminClubListContainer";
import AdminNotFound from "./AdminNotFound/AdminNotFound";
import AdminClubManagementContainer from "../../container/Admin/club/AdminClubManagementContainer";
import AdminClubMemberContainer from "../../container/Admin/club/AdminClubMemberContainer";
import AdminLogin from "../../component/Admin/AdminLogin/AdminLogin";
import { checkAdminIsLogin } from "../../lib/requestApi";

const AdminRouting = () => {
  const [isChecked, setIsChecked] = useState(false);
  useEffect(() => {
    checkAdminIsLogin().then(isLogin => {
      if (!isLogin && !window.location.href.includes("login")) {
        alert("잘못된 접근 입니다");
        window.location.href = "/admin/login";
        return;
      }
      setIsChecked(true);
    });
  }, []);
  return (
    isChecked && (
      <S.Container>
        <AdminNav />
        <Switch>
          <Route exact path="/admin" component={AdminMain} />
          <Route exact path="/admin/login" component={AdminLogin} />
          <Route exact path="/admin/club" component={AdminClub} />
          <Route
            exact
            path="/admin/club/list"
            component={AdminClubListContainer}
          />
          <Route
            exact
            path="/admin/club/management"
            component={AdminClubManagementContainer}
          />
          <Route
            exact
            path="/admin/club/member"
            component={AdminClubMemberContainer}
          />
          <Route component={AdminNotFound} />
        </Switch>
      </S.Container>
    )
  );
};

export default AdminRouting;
