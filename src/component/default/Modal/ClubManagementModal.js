import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState
} from "react";
import * as S from "./styles";
import ModalClubList from "../ModalClubList/ModalClubList";
import { EditIcon, SaveIcon, CancelIcon } from "../../../asset";
import ImgButton from "./ImgButton/ImgButton";
import { useDispatch, useSelector } from "react-redux";
import withModal from "./Modal";
import {
  changeClubDataSaga,
  getClubLocationSaga
} from "../../../module/action/club";
import modalAction from "../../../module/action/modal";
import LocationView from "./LocationView/LocationView";

const ClubManagementModal = () => {
  const dispatch = useDispatch();
  const data = useSelector(state => state.club.detail);
  const [isEdit, setIsEdit] = useState(false);
  const [circleData, setCircleData] = useState({
    name: "",
    location: "",
    teacher: "",
    club_head: "",
    students: []
  });

  useEffect(() => {
    dispatch(getClubLocationSaga(circleData.location));
  }, [circleData.location]);

  useEffect(() => {
    const {
      club: { name, location, teacher, club_head },
      students
    } = data;
    setCircleData({
      name,
      location,
      teacher,
      club_head,
      students
    });
  }, [data]);

  const cancelEdit = useCallback(() => {
    setIsEdit(false);
    const {
      club: { name, location, teacher, club_head },
      students
    } = data;
    setCircleData({
      name,
      location,
      teacher,
      club_head,
      students
    });
  }, [data]);
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

  const changeClubData = useCallback(() => {
    const { club_head, location, name, teacher } = circleData;
    if (!club_head || !location || !name || !teacher) {
      alert("빈칸을 모두 채워주세요");
      return;
    }
    const { club } = data;

    const newObject = { ...circleData };
    Object.keys(newObject).forEach(key => {
      circleData[key] === club[key] && delete newObject[key];
    });
    delete newObject["students"];

    dispatch(changeClubDataSaga([club.name, newObject]));
    dispatch(modalAction.creater.modalOff());
  }, [circleData, data]);

  const setLocation = useCallback(location => {
    setCircleData(prev => ({
      ...prev,
      location
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
            <ImgButton
              imgSrc={SaveIcon}
              color="#267DFF"
              onClick={changeClubData}
            >
              저장
            </ImgButton>
          </S.HeaderLeft>
          <S.HeaderCenter>
            <S.Input
              onChange={changeCircleData}
              fontSize={20}
              name="name"
              placeholder="동아리 이름"
              value={circleData.name}
            />
            <S.ViewWrap>
              <S.Input
                autoComplete="off"
                onChange={changeCircleData}
                fontSize={15}
                color="#707070"
                name="location"
                placeholder="동아리 위치"
                value={circleData.location}
              />
              <LocationView onClick={setLocation} />
            </S.ViewWrap>
          </S.HeaderCenter>
          <S.HeaderRight active={isEdit}>
            <S.Input
              onChange={changeCircleData}
              fontSize={13}
              color="#707070"
              name="teacher"
              placeholder="담당 선생님"
              value={circleData.teacher}
            />
            <S.Input
              onChange={changeCircleData}
              fontSize={13}
              color="#707070"
              name="club_head"
              placeholder="부장"
              value={circleData.club_head}
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
          <div>{circleData.location}</div>
        </S.HeaderCenter>
        <S.HeaderRight>
          <div>담당 : {circleData.teacher || "선생님 정보가 없어요"}</div>
          <div>부장 : {circleData.club_head}</div>
        </S.HeaderRight>
      </>
    );
  };

  return (
    <>
      <S.Header>{render()}</S.Header>
      <S.Body>
        <ModalClubList list={circleData.students} />
      </S.Body>
    </>
  );
};

export default withModal(ClubManagementModal);
