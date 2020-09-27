import React, { useCallback } from "react";
import FooterNotification from "./FooterNotification";

const ClubManagementFooterNotification = ({ active, isDeleteMode }) => {
  const deleteClubItem = useCallback(() => {
    console.log("삭제했습니다");
  }, []);
  return (
    <>
      {active && (
        <FooterNotification onClick={isDeleteMode ? deleteClubItem : undefined}>
          {isDeleteMode ? "삭제" : "삭제할 동아리를 선택하세요"}
        </FooterNotification>
      )}
    </>
  );
};

export default ClubManagementFooterNotification;
