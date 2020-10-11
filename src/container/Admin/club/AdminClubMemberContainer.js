import React, { useEffect } from "react";
import AdminClubMember from "../../../component/Admin/club/AdminClubMember";
import { useDispatch } from "react-redux";
import { updateClubList } from "../../../module/action/club";

export const staticData = [
  {
    name: "제1동아리",
    where: "제1동아리 실"
  },
  {
    name: "제2동아리",
    where: "제2동아리 실"
  },
  {
    name: "제3동아리",
    where: "제3동아리 실"
  },
  {
    name: "제1동아리",
    where: "제1동아리 실"
  },
  {
    name: "제2동아리",
    where: "제2동아리 실"
  },
  {
    name: "제3동아리",
    where: "제3동아리 실"
  }
];

const AdminClubMemberContainer = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(updateClubList(staticData));
  }, []);
  return <AdminClubMember />;
};

export default AdminClubMemberContainer;
