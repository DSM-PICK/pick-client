import React from "react";
import * as S from "./styles";
import { Switch, Route, Link } from "react-router-dom";
import AdminMain from "./AdminMain/AdminMain";
import AdminClub from "./AdminClub/AdminClub";
import AdminPrint from "./AdminPrint/AdminPrint";
import AdminNav from "./AdminNav/AdminNav";
import AdminClubListContainer from "../../container/Admin/club/AdminClubListContainer";

const AdminRouting = () => {
  return (
    <S.Container>
      <AdminNav />
      <Switch>
        <Route exact path="/admin" component={AdminMain} />
        <Route exact path="/admin/club" component={AdminClub} />
        <Route exact path="/admin/print" component={AdminPrint} />
        <Route
          exact
          path="/admin/club/list"
          component={AdminClubListContainer}
        />
      </Switch>
    </S.Container>
  );
};

export default AdminRouting;
