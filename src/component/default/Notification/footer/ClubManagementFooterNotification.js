import React, { useCallback } from "react";
import FooterNotification from "./FooterNotification";

const ClubManagementFooterNotification = ({
  active,
  isDeleteMode,
  deleteClub
}) => {
  return (
    <>
      {active && (
        <FooterNotification onClick={isDeleteMode ? deleteClub : undefined}>
          {isDeleteMode ? "삭제" : "삭제할 동아리를 선택하세요"}
        </FooterNotification>
      )}
    </>
  );
};

export default ClubManagementFooterNotification;
