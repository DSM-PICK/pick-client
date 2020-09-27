import React, { memo, useCallback } from "react";
import ModalClubItem from "./ModalClubItem";

const ModalClubItemMember = ({ number, name, step, selectMember }) => {
  const clickHandler = useCallback(
    e => {
      switch (step) {
        case 0: {
          selectMember(number);
          e.target.classList.add("selected");
          return;
        }
        case 1: {
        }
      }
    },
    [step]
  );
  return <ModalClubItem number={number} name={name} onClick={clickHandler} />;
};

export default memo(ModalClubItemMember);
