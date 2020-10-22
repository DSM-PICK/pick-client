import React, { memo } from "react";
import ModalClubItemMember from "../ModalClubItem/ModalClubItemMember";
import * as S from "./styles";

const ModalMemberClubList = ({ students, step, selectMember, isEdit }) => {
  return (
    <S.Container>
      <S.Row>
        {students.map(({ name, num }) => (
          <ModalClubItemMember
            isEdit={isEdit}
            selectMember={selectMember}
            name={name}
            number={num}
            step={step}
            key={name + num}
          />
        ))}
      </S.Row>
    </S.Container>
  );
};

export default memo(ModalMemberClubList);
