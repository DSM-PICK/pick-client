import React, { useCallback, useRef, useState } from "react";
import { SaveIcon } from "../../../asset";
import ImgButton from "./ImgButton/ImgButton";
import ModalCreateClubList from "../ModalClubList/ModalCreateClubList";
import * as S from "./styles";

const CreateClubModal = ({ isOpen, setFunc }) => {
  const [createCircleData, setCreateCircleData] = useState({
    name: "",
    where: "",
    teacher: "",
    owner: ""
  });
  const [createSutdnetArray, setCreateSutdnetArray] = useState([]);
  const addCreateSutdnetArray = useCallback(newStudentStr => {
    const [number, name] = newStudentStr.split(" ");
    setCreateSutdnetArray(prev => prev.concat({ number, name }));
  }, []);

  const modalRef = useRef();

  const modalOff = useCallback(e => {
    if (e.target.contains(modalRef.current)) {
      setFunc(false);
    }
  }, []);

  const changeCircleData = useCallback(e => {
    const { target, value } = e;
    setCreateCircleData(prev => ({
      ...prev,
      [target]: value
    }));
  }, []);
  return (
    <>
      {isOpen && (
        <S.Background onClick={modalOff}>
          <S.Modal ref={modalRef}>
            <S.Header>
              <S.HeaderLeft>
                <ImgButton imgSrc={SaveIcon} onClick={() => {}} color="#267DFF">
                  저장
                </ImgButton>
              </S.HeaderLeft>
              <S.HeaderCenter>
                <S.Input
                  placeholder="동아리 이름"
                  onChange={changeCircleData}
                  fontSize={20}
                  name="name"
                  value={createCircleData.name}
                />
                <S.Input
                  placeholder="동아리 실"
                  onChange={changeCircleData}
                  fontSize={15}
                  color="#707070"
                  name="where"
                  value={createCircleData.where}
                />
              </S.HeaderCenter>
              <S.HeaderRight active={true}>
                <S.Input
                  placeholder="담당 선생님"
                  onChange={changeCircleData}
                  fontSize={13}
                  color="#707070"
                  name="teacher"
                  value={createCircleData.teacher}
                />
                <S.Input
                  placeholder="부장 이름"
                  onChange={changeCircleData}
                  fontSize={13}
                  color="#707070"
                  name="owner"
                  value={createCircleData.owner}
                />
              </S.HeaderRight>
            </S.Header>
            <S.Body>
              <ModalCreateClubList
                data={createSutdnetArray}
                setData={addCreateSutdnetArray}
              />
            </S.Body>
          </S.Modal>
        </S.Background>
      )}
    </>
  );
};

export default CreateClubModal;
