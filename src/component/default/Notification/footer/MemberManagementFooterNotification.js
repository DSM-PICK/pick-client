import React, { useCallback } from "react";
import FooterNotification from "./FooterNotification";

const MemberManagementFooterNotification = ({
  edtingMember,
  step,
  setStep
}) => {
  const clickHandler = useCallback(() => {
    switch (step) {
      case 0: {
        setStep(1);
      }
    }
  }, [step]);
  return (
    <FooterNotification onClick={clickHandler}>
      {step === 0 ? `선택완료 (${edtingMember.length}명)` : ""}
    </FooterNotification>
  );
};

export default MemberManagementFooterNotification;
