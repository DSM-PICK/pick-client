import React, { useCallback, useState } from "react";
import ModalClubItem from "../ModalClubItem/ModalClubItem";
import { Container as ModalClubItemContainer } from "../ModalClubItem/styles";
import * as S from "./styles";

const ModalCreateClubList = ({ data, setData }) => {
  const [createStudentData, setCreateStudentData] = useState("");
  const checkEnter = useCallback(
    e => {
      const ENTRT_KEY_CODE = 13;
      if (e.keyCode === ENTRT_KEY_CODE) {
        setData(createStudentData);
        setCreateStudentData("");
      }
    },
    [createStudentData]
  );

  const onChange = useCallback(e => {
    setCreateStudentData(e.target.value);
  }, []);
  return (
    <S.Container>
      <S.Row>
        <ModalClubItemContainer>
          <S.CraeteInput
            value={createStudentData}
            onChange={onChange}
            onKeyDown={checkEnter}
            placeholder="ex) 1101"
          />
        </ModalClubItemContainer>
        {data.map((num, index) => (
          <ModalClubItem key={index + num} number={num} />
        ))}
      </S.Row>
    </S.Container>
  );
};

export default ModalCreateClubList;
