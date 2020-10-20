import React, { useEffect } from "react";
import AdminClubMember from "../../../component/Admin/club/AdminClubMember";
import { useDispatch } from "react-redux";
import { updateClubListSaga } from "../../../module/action/club";

const AdminClubMemberContainer = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(updateClubListSaga());
  }, []);
  return <AdminClubMember />;
};

export default AdminClubMemberContainer;
