import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import AdminClubList from "../../../component/Admin/club/AdminClubList";
import { updateClubListSaga } from "../../../module/action/club";

const AdminClubListContainer = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(updateClubListSaga());
  }, []);
  return <AdminClubList />;
};

export default AdminClubListContainer;
