import React, { useCallback, useEffect, useRef, useState } from "react";
import { CancelIcon, SaveIcon } from "../../../asset";
import ImgButton from "./ImgButton/ImgButton";
import ModalCreateClubList from "../ModalClubList/ModalCreateClubList";
import * as S from "./styles";
import LocationView from "./LocationView/LocationView";
import { useDispatch, useSelector } from "react-redux";
import { addClubSaga, getClubLocationSaga } from "../../../module/action/club";

const CreateClubModal = ({ isOpen, setFunc }) => {
  const dispatch = useDispatch();

  const [createCircleData, setCreateCircleData] = useState({
    name: "",
    location: "",
    teacher: "",
    club_head: ""
  });

  useEffect(() => {
    dispatch(getClubLocationSaga(createCircleData.location));
  }, [createCircleData.location]);

  const [createSutdnetArray, setCreateSutdnetArray] = useState([]);
  const addCreateSutdnetArray = useCallback(newStudentNum => {
    setCreateSutdnetArray(prev => prev.concat(newStudentNum));
  }, []);

  const modalRef = useRef();

  const modalOff = useCallback(e => {
    if (e.target.contains(modalRef.current)) {
      setFunc(false);
    }
  }, []);

  const changeCircleData = useCallback(e => {
    const { name, value } = e.target;
    setCreateCircleData(prev => ({
      ...prev,
      [name]: value
    }));
  }, []);

  const setLocation = useCallback(location => {
    setCreateCircleData(prev => ({
      ...prev,
      location
    }));
  }, []);

  const cencelButton = useCallback(() => {
    setCreateCircleData({
      name: "",
      location: "",
      teacher: "",
      club_head: ""
    });
    setCreateSutdnetArray([]);
  }, []);

  const addClub = useCallback(() => {
    const { name, location, teacher, club_head } = createCircleData;
    if (!name || !location || !teacher || !club_head) {
      alert("빈칸을 모두 채워주세요");
      return;
    }
    dispatch(
      addClubSaga({ clubData: createCircleData, member: createSutdnetArray })
    );
  }, [createCircleData, createSutdnetArray]);

  return (
    <>
      {isOpen && (
        <S.Background onClick={modalOff}>
          <S.Modal ref={modalRef}>
            <S.Header>
              <S.HeaderLeft>
                <ImgButton
                  imgSrc={CancelIcon}
                  onClick={cencelButton}
                  color="#E81A95"
                >
                  취소
                </ImgButton>
                <ImgButton imgSrc={SaveIcon} onClick={addClub} color="#267DFF">
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
                <S.ViewWrap>
                  <S.Input
                    autoComplete="off"
                    placeholder="동아리 실"
                    onChange={changeCircleData}
                    fontSize={15}
                    color="#707070"
                    name="location"
                    value={createCircleData.location}
                  />
                  <LocationView onClick={setLocation} />
                </S.ViewWrap>
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
                  name="club_head"
                  value={createCircleData.club_head}
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
