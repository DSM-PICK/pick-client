import React, { useCallback, useEffect, useState } from "react";
import ModalMenberClubList from "../ModalClubList/ModalMenberClubList";
import * as S from "./styles";
import { useSelector } from "react-redux";
import withModal from "./Modal";
import ImgButton from "./ImgButton/ImgButton";
import { CancelIcon, EditIcon, SaveIcon } from "../../../asset";
import MemberManagementFooterNotification from "../Notification/footer/MemberManagementFooterNotification";

const MemerModal = ({ step, setEditStep, setCircleData }) => {
  const data = useSelector(state => state.club.detail);
  const {
    name,
    where,
    teacher,
    owner,
    people: { one, two, three }
  } = data;

  const [isEdit, setIsEdit] = useState(false);
  const [edtingMember, setEdtingMember] = useState([]);

  useEffect(() => {
    setCircleData(prev => ({
      ...prev,
      from: {
        id: 0,
        name
      }
    }));
  }, []);

  const selectMember = useCallback(number => {
    setEdtingMember(prev => {
      if (prev.includes(number)) {
        return prev;
      }
      return prev.concat(number);
    });
  }, []);

  const cancelMember = useCallback(() => {
    setIsEdit(false);
  }, []);

  const changeIsEdit = useCallback(() => {
    setIsEdit(prev => !prev);
  }, []);

  return (
    <>
      <S.Header>
        <S.HeaderLeft>
          {isEdit ? (
            <>
              <ImgButton
                color="#E81A95"
                imgSrc={CancelIcon}
                onClick={cancelMember}
              >
                취소
              </ImgButton>
              <ImgButton color="#267DFF" imgSrc={SaveIcon}>
                저장
              </ImgButton>
            </>
          ) : (
            <ImgButton color="#267DFF" imgSrc={EditIcon} onClick={changeIsEdit}>
              편집
            </ImgButton>
          )}
        </S.HeaderLeft>
        <S.HeaderCenter>
          <div>{name}</div>
          <div>{where}</div>
        </S.HeaderCenter>
        <S.HeaderRight>
          <div>담당 : {teacher}</div>
          <div>부장 : {owner}</div>
        </S.HeaderRight>
      </S.Header>
      <S.Hr />
      <S.Body>
        <ModalMenberClubList
          one={one}
          two={two}
          three={three}
          step={step}
          selectMember={selectMember}
        />
        {isEdit && (
          <MemberManagementFooterNotification
            step={step}
            setStep={setEditStep}
            edtingMember={edtingMember}
          />
        )}
      </S.Body>
    </>
  );
};

export default withModal(MemerModal);
