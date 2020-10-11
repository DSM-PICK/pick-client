import React, { memo } from "react";
import ModalClubItemMember from "../ModalClubItem/ModalClubItemMember";
import * as S from "./styles";

const ModalMemberClubList = ({ one, two, three, step, selectMember }) => {
  return (
    <S.Container>
      <S.Row>
        {one.map(({ name, number }) => (
          <ModalClubItemMember
            selectMember={selectMember}
            name={name}
            number={number}
            step={step}
          />
        ))}
      </S.Row>
      <S.Row>
        {two.map(({ name, number }) => (
          <ModalClubItemMember
            selectMember={selectMember}
            name={name}
            number={number}
            step={step}
          />
        ))}
      </S.Row>
      <S.Row>
        {three.map(({ name, number }) => (
          <ModalClubItemMember
            selectMember={selectMember}
            name={name}
            number={number}
            step={step}
          />
        ))}
      </S.Row>
    </S.Container>
  );
};

export default memo(ModalMemberClubList);
