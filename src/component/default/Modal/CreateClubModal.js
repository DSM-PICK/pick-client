import React, { useCallback, useEffect, useRef, useState } from "react";
import { CancelIcon, SaveIcon } from "../../../asset";
import ImgButton from "./ImgButton/ImgButton";
import ModalCreateClubList from "../ModalClubList/ModalCreateClubList";
import * as S from "./styles";
import * as adminApi from "../../../lib/api/admin";
import LocationView from "./LocationView/LocationView";
import { useDispatch } from "react-redux";
import modalAction from "../../../module/action/modal";
import { addClubSaga, getClubLocationSaga } from "../../../module/action/club";

const CreateClubModal = ({ isOpen, setFunc }) => {
  const dispatch = useDispatch();

  const [createCircleData, setCreateCircleData] = useState({
    name: "",
    location: "",
    teacher: "",
    club_head: ""
  });
  const [teachers, setTeachers] = useState([]);

  useEffect(() => {
    dispatch(getClubLocationSaga(createCircleData.location));
  }, [createCircleData.location]);

  const [createSutdnetArray, setCreateSutdnetArray] = useState([]);
  const addCreateSutdnetArray = useCallback(newStudentNum => {
    if (newStudentNum)
      setCreateSutdnetArray(prev => {
        if (prev.includes(newStudentNum)) return prev;
        return prev.concat(newStudentNum);
      });
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

  const getTeacherList = useCallback(async e => {
    const keyword = e.target.value;
    setCreateCircleData(prev => ({ ...prev, teacher: keyword }));
    try {
      const res = await adminApi.getTeachers(keyword);
      setTeachers(res.data);
    } catch (err) {}
  }, []);

  const setTeacherName = useCallback(name => {
    setCreateCircleData(prev => ({
      ...prev,
      teacher: name
    }));
    setTeachers([]);
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
    const { name, location, club_head } = createCircleData;
    if (!name.trim() || !location) {
      alert("빈칸을 모두 채워주세요");
      return;
    }
    const noneList = ["/", "?", "%", "#"];
    const isInclueNoneChar = noneList.reduce(
      (state, noneChar) => state || name.includes(noneChar),
      false
    );
    if (isInclueNoneChar) {
      alert("/, ?, %, #는 삽입 불가합니다");
      return;
    }
    if (name.length > 20) {
      alert("동아리 이름은 20자 제한입니다");
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
                <S.TeacherNameWrap>
                  <S.Input
                    placeholder="담당 선생님"
                    onChange={getTeacherList}
                    fontSize={13}
                    autoComplete="off"
                    color="#707070"
                    name="teacher"
                    value={createCircleData.teacher}
                  />
                  {teachers.length ? (
                    <S.TeacherNameList>
                      {teachers.map(({ name }) => (
                        <S.TeacherNameItem
                          key={name}
                          onClick={() => setTeacherName(name)}
                        >
                          {name}
                        </S.TeacherNameItem>
                      ))}
                    </S.TeacherNameList>
                  ) : (
                    ""
                  )}
                </S.TeacherNameWrap>

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
