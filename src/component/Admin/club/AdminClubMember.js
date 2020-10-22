import React, { useCallback, useEffect, useState } from "react";
import * as S from "./styles";
import MemberClubList from "../../default/ClubList/MemberClubList";
import { useDispatch, useSelector } from "react-redux";
import ChangeCircle from "../../default/ChangleCircle/ChangeCircle";
import MemberModal from "../../default/Modal/MemberModal";
import { moveStudentSaga } from "../../../module/action/club";
import modalAction from "../../../module/action/modal";

const AdminClubMember = () => {
  const dispatch = useDispatch();
  const data = useSelector(state => state.club.list);
  const [editStep, setEditStep] = useState(0);
  const [circleData, setCircleData] = useState({
    from: null,
    to: null
  });
  const changeClub = useCallback(() => {
    dispatch(moveStudentSaga(circleData));
    setEditStep(0);
    dispatch(modalAction.creater.modalOff());
  }, [circleData]);

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
      {editStep > 0 && (
        <ChangeCircle
          setEditStep={setEditStep}
          step={editStep}
          circleData={circleData}
          clickHandler={changeClub}
        />
      )}
    </S.Container>
  );
};

export default AdminClubMember;
