import React from "react";
import LeftLoginSection from "./LoginSection/LeftLoginSection/LeftLoginSection";
import RightLoginSection from "./LoginSection/RightLoginSection/RightLoginSection";
import * as S from "./styles";

const AdminLogin = () => {
  return (
    <S.Container>
      <LeftLoginSection />
      <RightLoginSection />
    </S.Container>
  );
};

export default AdminLogin;
