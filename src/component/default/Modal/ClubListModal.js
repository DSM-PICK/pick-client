import React from "react";
import Modal from "./Modal";
import ModalClubList from "../ModalClubList/ModalClubList";
import * as S from "./styles";

const ClubListModal = () => {
  return (
    <Modal>
      <S.Header>
        <S.EmptyBox />
        <S.HeaderCenter>
          <div>ABC Mart</div>
          <div>정보보안 1실</div>
        </S.HeaderCenter>
        <div>
          <div>담당 : 신요셉</div>
          <div>부장 : 김민석</div>
        </div>
      </S.Header>
      <S.Hr />
      <S.Body>
        <ModalClubList
          one={["ㅇ", "1", "2"]}
          two={["1", "2", "3"]}
          three={["1", "2", "3", 1, 1, 1, 1, 1, 1]}
        />
      </S.Body>
    </Modal>
  );
};

export default ClubListModal;
