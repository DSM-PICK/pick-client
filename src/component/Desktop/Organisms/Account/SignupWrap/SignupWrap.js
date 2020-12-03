import React, { useState } from "react";
import * as S from "./styles";
import Link from "../../../Atoms/Link/Link";
import Img from "../../../Atoms/Img/Img";
import SignupForm from "../../../Molecules/Form/LoginForm/SignupForm/SignupForm";
import { LogoPick } from "../../../../../asset";
import UserCheckForm from "../../../Molecules/Form/LoginForm/UserCheckForm/UserCheckForm";

const SignupWrap = () => {
  const [isAccounted, setIsAccounted] = useState(true);

  return (
    <S.Container>
      <Img img={LogoPick} style={S.ImgStyle} />
      {isAccounted ? (
        <>
          <UserCheckForm
            isAccounted={isAccounted}
            setIsAccounted={setIsAccounted}
          />
          <Link
            to={"/login"}
            text={"이미 계정이 있습니다"}
            style={S.LinkStyle}
          />
        </>
      ) : (
        <>
          <SignupForm />
          <S.BackButton
            onClick={() => setIsAccounted(isAccounted => !isAccounted)}
            {...S.LinkStyle}
          >
            이전으로 돌아가기
          </S.BackButton>
        </>
      )}
    </S.Container>
  );
};

export default SignupWrap;
