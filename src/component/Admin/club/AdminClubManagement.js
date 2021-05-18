import React, { useState, useCallback, useEffect, useMemo } from "react";
import { useSelector } from "react-redux";
import ManagementClubList from "../../default/ClubList/ManagementClubList";
import ClubManagementModal from "../../default/Modal/ClubManagementModal";
import * as S from "./styles";
import { searchIcon } from "../../../asset";
import { useDispatch } from "react-redux";
import ImgButton from "../../default/Modal/ImgButton/ImgButton";
import { DeleteIcon, PlusIcon } from "../../../asset";
import ClubManagementFooterNotification from "../../default/Notification/footer/ClubManagementFooterNotification";
import CreateClubModal from "../../default/Modal/CreateClubModal";
import { deleteClubSaga } from "../../../module/action/club";
import { getClubFilter } from "../../../lib/api/search";

const AdminClubManagement = () => {
  const dispatch = useDispatch();
  const data = useSelector(state => state.club.list);
  const [isDeleteOn, setIsDeleteOn] = useState(false);
  const [selectItem, setSelectItem] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);
  const [clubNames, setClubnames] = useState([]);
  const deleteOnChange = useCallback(() => {
    setIsDeleteOn(prev => !prev);
  }, []);

  const changeKeyword = useCallback(async e => {
    if (!e.target.value) return;
    const res = await getClubFilter(e.target.value);
    setClubnames(res.data.map(({ club_name }) => club_name));
  }, []);

  const filterData = useMemo(() => {
    if (!clubNames.length) return data;
    return data.filter(({ name }) => clubNames.includes(name));
  }, [clubNames, data]);

  const deleteClub = useCallback(() => {
    dispatch(deleteClubSaga(selectItem));
    setSelectItem([]);
    document
      .querySelectorAll("div.active")
      .forEach(element => element.classList.remove("active"));
  }, [selectItem]);

  const changeSelectItem = useCallback(newName => {
    setSelectItem(prev => {
      if (prev.includes(newName))
        return prev.filter(clubName => clubName !== newName);
      return prev.concat(newName);
    });
  }, []);

  const changeIsAddMode = useCallback(() => {
    setIsAddMode(prev => !prev);
  }, []);

  return (
    <S.Container>
      <S.Header>
        <S.Title>
          동아리 관리
          <S.SearchButtonWrap>
            <img src={searchIcon} />
            <S.SearchInput onChange={changeKeyword} placeholder="학생 이름" />
          </S.SearchButtonWrap>
        </S.Title>
      </S.Header>
      <S.Body>
        <S.ManagementButtonWrap>
          <ImgButton
            imgSrc={DeleteIcon}
            color="#267DFF"
            onClick={changeIsAddMode}
            shadow={true}
          >
            추가
          </ImgButton>
          <ImgButton
            imgSrc={PlusIcon}
            color="#E81A95"
            shadow={true}
            onClick={deleteOnChange}
            active={isDeleteOn}
          >
            삭제
          </ImgButton>
        </S.ManagementButtonWrap>
        <ManagementClubList
          data={filterData}
          changeSelectItem={changeSelectItem}
          isDeleteOn={isDeleteOn}
        />
        <CreateClubModal isOpen={isAddMode} setFunc={setIsAddMode} />
        <ClubManagementFooterNotification
          deleteClub={deleteClub}
          isDeleteMode={selectItem.length > 0}
          active={isDeleteOn}
        />
      </S.Body>
      <ClubManagementModal />
    </S.Container>
  );
};

export default AdminClubManagement;
