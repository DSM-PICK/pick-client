import React, { useState, useCallback, useEffect } from "react";
import { useSelector } from "react-redux";
import ManagementClubList from "../../default/ClubList/ManagementClubList";
import ClubManagementModal from "../../default/Modal/ClubManagementModal";
import * as S from "./styles";
import { useDispatch } from "react-redux";
import ImgButton from "../../default/Modal/ImgButton/ImgButton";
import { DeleteIcon, PlusIcon } from "../../../asset";
import ClubManagementFooterNotification from "../../default/Notification/footer/ClubManagementFooterNotification";
import CreateClubModal from "../../default/Modal/CreateClubModal";
import { deleteClubSaga } from "../../../module/action/club";

const AdminClubManagement = () => {
  const dispatch = useDispatch();
  const data = useSelector(state => state.club.list);
  const [isDeleteOn, setIsDeleteOn] = useState(false);
  const [selectItem, setSelectItem] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);
  const deleteOnChange = useCallback(() => {
    setIsDeleteOn(prev => !prev);
  }, []);

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
      <S.Header>동아리 관리</S.Header>
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
          data={data}
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
