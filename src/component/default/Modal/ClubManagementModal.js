import React, { memo, useCallback, useEffect, useMemo, useState } from "react";
import * as S from "./styles";
import ModalClubList from "../ModalClubList/ModalClubList";
import { EditIcon, SaveIcon, CancelIcon } from "../../../asset";
import ImgButton from "./ImgButton/ImgButton";
import { useSelector } from "react-redux";
import withModal from "./Modal";

const ClubManagementModal = () => {
  const data = useSelector(state => state.club.detail);
  const {
    name,
    where,
    teacher,
    owner,
    people: { one, two, three }
  } = data;

  useEffect(() => {
    setCircleData(data);
  }, [data]);

  const [isEdit, setIsEdit] = useState(false);
  const [circleData, setCircleData] = useState({
    name,
    where,
    teacher,
    owner
  });

  const cancelEdit = useCallback(() => {
    setIsEdit(false);
    setCircleData(data);
  }, []);
  const changeIsEdit = useCallback(() => {
    setIsEdit(prev => !prev);
  }, []);

  const changeCircleData = useCallback(e => {
    const { name, value } = e.target;
    setCircleData(prev => ({
      ...prev,
      [name]: value
    }));
  }, []);

  const render = () => {
    if (isEdit) {
      return (
        <>
          <S.HeaderLeft>
            <ImgButton imgSrc={CancelIcon} onClick={cancelEdit} color="#E81A95">
              취소
            </ImgButton>
            <ImgButton imgSrc={SaveIcon} color="#267DFF" onClick={changeIsEdit}>
              저장
            </ImgButton>
          </S.HeaderLeft>
          <S.HeaderCenter>
            <S.Input
              onChange={changeCircleData}
              fontSize={20}
              name="name"
              value={circleData.name}
            />
            <S.Input
              onChange={changeCircleData}
              fontSize={15}
              color="#707070"
              name="where"
              value={circleData.where}
            />
          </S.HeaderCenter>
          <S.HeaderRight active={isEdit}>
            <S.Input
              onChange={changeCircleData}
              fontSize={13}
              color="#707070"
              name="teacher"
              value={circleData.teacher}
            />
            <S.Input
              onChange={changeCircleData}
              fontSize={13}
              color="#707070"
              name="owner"
              value={circleData.owner}
            />
          </S.HeaderRight>
        </>
      );
    }
    return (
      <>
        <S.HeaderLeft>
          <ImgButton imgSrc={EditIcon} onClick={changeIsEdit} color="#267DFF">
            편집
          </ImgButton>
        </S.HeaderLeft>
        <S.HeaderCenter>
          <div>{circleData.name}</div>
          <div>{circleData.where}</div>
        </S.HeaderCenter>
        <S.HeaderRight>
          <div>담당 : {circleData.teacher}</div>
          <div>부장 : {circleData.owner}</div>
        </S.HeaderRight>
      </>
    );
  };

  return (
    <>
      <S.Header>{render()}</S.Header>
      <S.Body>
        <ModalClubList one={one} two={two} three={three} />
      </S.Body>
    </>
  );
};

export default withModal(ClubManagementModal);
