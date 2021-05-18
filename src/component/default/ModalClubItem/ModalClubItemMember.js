import React, { memo, useCallback } from "react";
import ModalClubItem from "./ModalClubItem";

const ModalClubItemMember = ({ isEdit, number, name, step, selectMember }) => {
  const clickHandler = useCallback(
    e => {
      if (!isEdit) return;
      switch (step) {
        case 0: {
          selectMember(number);
          e.target.classList.toggle("selected");
          return;
        }
        case 1: {
        }
      }
    },
    [step, isEdit]
  );
  return <ModalClubItem number={number} name={name} onClick={clickHandler} />;
};

export default memo(ModalClubItemMember);
