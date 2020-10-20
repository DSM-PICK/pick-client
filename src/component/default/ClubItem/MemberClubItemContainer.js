import React, { useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";
import { updateClubDetailSaga } from "../../../module/action/club";
import modalAction from "../../../module/action/modal";
import ClubItem from "./ClubItem";

const MemberClubItemContainer = ({
  name,
  where,
  step,
  id,
  setCircleData,
  setEditStep
}) => {
  const dispatch = useDispatch();
  const onClick = useCallback(() => {
    if (step === 1) {
      setCircleData(prev => ({
        ...prev,
        to: {
          id,
          name
        }
      }));
      setEditStep(2);
      return;
    }
    dispatch(updateClubDetailSaga());
    dispatch(modalAction.creater.modalOn());
  }, [step]);

  return <ClubItem onClick={onClick} name={name} where={where} />;
};

export default MemberClubItemContainer;
