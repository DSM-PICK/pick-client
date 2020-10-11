import React, { useEffect, useState } from "react";
import * as S from "./styles";
import MemberClubList from "../../default/ClubList/MemberClubList";
import { useSelector } from "react-redux";
import ChangeCircle from "../../default/ChangleCircle/ChangeCircle";
import MemberModal from "../../default/Modal/MemberModal";

const AdminClubMember = () => {
  const data = useSelector(state => state.club.list);
  const [editStep, setEditStep] = useState(0);
  const [circleData, setCircleData] = useState({
    from: null,
    to: null
  });

  return (
    <S.Container>
      <S.Header>동아리원 관리</S.Header>
      <S.Body>
        <MemberClubList
          step={editStep}
          data={data}
          setCircleData={setCircleData}
          setEditStep={setEditStep}
        />
      </S.Body>
      {editStep < 1 && (
        <MemberModal
          step={editStep}
          setEditStep={setEditStep}
          setCircleData={setCircleData}
        />
      )}
      {editStep > 0 && <ChangeCircle step={editStep} circleData={circleData} />}
    </S.Container>
  );
};

export default AdminClubMember;
