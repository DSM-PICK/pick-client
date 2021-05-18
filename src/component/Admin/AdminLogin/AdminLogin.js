import React from "react";
import LeftLoginSection from "./LoginSection/LeftLoginSection/LeftLoginSection";
import RightLoginSection from "./LoginSection/RightLoginSection/RightLoginSection";
import * as S from "./styles";
import { AdminLoginBackground } from "../../../asset/Admin/Admin";

const AdminLogin = () => {
  return (
    <S.Container>
      <S.ContainerBackground url={AdminLoginBackground}>
        <LeftLoginSection />
        <RightLoginSection />
      </S.ContainerBackground>
    </S.Container>
  );
};

export default AdminLogin;
