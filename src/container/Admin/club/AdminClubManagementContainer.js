import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { updateClubList } from "../../../module/action/club";
import AdminClubManagement from "../../../component/Admin/club/AdminClubManagement";

const staticData = [
  {
    id: 1,
    name: "관리1",
    where: "관리1실"
  },
  {
    id: 2,
    name: "관리2",
    where: "관리2실"
  },
  {
    id: 3,
    name: "관리3",
    where: "관리3실"
  },
  {
    id: 4,
    name: "관리4",
    where: "관리4실"
  },
  {
    id: 5,
    name: "관리5",
    where: "관리5실"
  }
];

const AdminClubManagementContainer = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(updateClubList(staticData));
  }, []);
  return <AdminClubManagement />;
};

export default AdminClubManagementContainer;
