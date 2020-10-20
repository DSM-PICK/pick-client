import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { updateClubListSaga } from "../../../module/action/club";
import AdminClubManagement from "../../../component/Admin/club/AdminClubManagement";

const AdminClubManagementContainer = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(updateClubListSaga());
  }, []);
  return <AdminClubManagement />;
};

export default AdminClubManagementContainer;
