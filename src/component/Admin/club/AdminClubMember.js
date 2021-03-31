import React, { useCallback, useEffect, useState, useMemo } from "react";
import * as S from "./styles";
import MemberClubList from "../../default/ClubList/MemberClubList";
import { useDispatch, useSelector } from "react-redux";
import ChangeCircle from "../../default/ChangleCircle/ChangeCircle";
import MemberModal from "../../default/Modal/MemberModal";
import { searchIcon } from "../../../asset";
import { moveStudentSaga } from "../../../module/action/club";
import modalAction from "../../../module/action/modal";
import { getClubFilter } from "../../../lib/api/search";

const AdminClubMember = () => {
  const dispatch = useDispatch();
  const data = useSelector(state => state.club.list);
  const [editStep, setEditStep] = useState(0);
  const [clubNames, setClubnames] = useState([]);
  const [circleData, setCircleData] = useState({
    from: null,
    to: null
  });

  const changeKeyword = useCallback(async e => {
    if (!e.target.value) return;
    const res = await getClubFilter(e.target.value);
    setClubnames(res.data.map(({ club_name }) => club_name));
  }, []);

  const filterData = useMemo(() => {
    if (!clubNames.length) return data;
    return data.filter(({ name }) => clubNames.includes(name));
  }, [clubNames, data]);
  const changeClub = useCallback(() => {
    dispatch(moveStudentSaga(circleData));
    setEditStep(0);
    dispatch(modalAction.creater.modalOff());
  }, [circleData]);

  return (
    <S.Container>
      <S.Header>
        <S.Title>
          동아리 목록
          <S.SearchButtonWrap>
            <img src={searchIcon} />
            <S.SearchInput onChange={changeKeyword} />
          </S.SearchButtonWrap>
        </S.Title>
      </S.Header>
      <S.Body>
        <MemberClubList
          step={editStep}
          data={filterData}
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
