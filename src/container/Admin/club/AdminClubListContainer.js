import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import AdminClubList from "../../../component/Admin/club/AdminClubList";
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

const AdminClubListContainer = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(updateClubList(staticData));
  }, [staticData]);
  return <AdminClubList />;
};

export default AdminClubListContainer;
