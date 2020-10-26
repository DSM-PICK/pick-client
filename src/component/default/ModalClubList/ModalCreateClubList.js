import React, { useCallback, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ModalClubItem from "../ModalClubItem/ModalClubItem";
import { Container as ModalClubItemContainer } from "../ModalClubItem/styles";
import * as S from "./styles";
import { getStudentSaga, GET_STUDENT_SAGA } from "../../../module/action/club";

const ModalCreateClubList = ({ data, setData }) => {
  const dispatch = useDispatch();
  const inputRef = useRef();
  const students = useSelector(store => store.club.students);
  const [createStudentData, setCreateStudentData] = useState("");
  const onChange = useCallback(e => {
    dispatch(getStudentSaga(e.target.value));
    setCreateStudentData(e.target.value);
  }, []);
  return (
    <S.Container>
      <S.Row>
        <ModalClubItemContainer>
          <S.CraeteInput
            value={createStudentData}
            onChange={onChange}
            ref={inputRef}
            placeholder="ex) 1101"
          />
          <S.MemberWrap>
            {students.map(({ name, num }) => (
              <S.MemberItem
                onClick={() => {
                  setData(num);
                  setCreateStudentData("");
                  inputRef.current.focus();
                }}
              >
                {num} {name}
              </S.MemberItem>
            ))}
          </S.MemberWrap>
        </ModalClubItemContainer>
        {data.map((num, index) => (
          <ModalClubItem key={index + num} number={num} />
        ))}
      </S.Row>
    </S.Container>
  );
};

export default ModalCreateClubList;
