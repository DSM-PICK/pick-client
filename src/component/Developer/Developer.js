import React from "react";
import { FacebookLogo, GithubLogo, LogoPickWithCap } from "../../asset";
import * as S from "./styles";

const Developer = () => {
  return (
    <S.Container>
      <S.Main>
        <div>
          <S.Field>Front</S.Field>
          <div>공영길</div>
          <div>유시온</div>
          <div>오준상</div>
        </div>
        <div>
          <S.Field>Server</S.Field>
          <div>손정우</div>
          <div>김대웅</div>
          <div>이진혁</div>
        </div>
        <div>
          <S.Field>Design</S.Field>
          <div>김민석</div>
        </div>
        <div>
          <S.Field>DevOps</S.Field>
          <div>정우영</div>
        </div>
      </S.Main>
      <S.Hr />
      <S.Footer>
        <div>
          <img src={LogoPickWithCap} />
          <div>© 2020 Team PICK. All rights reserved.</div>
        </div>
        <div>
          <a href="https://github.com/DSM-PICK" target="_blank">
            <img src={GithubLogo} />
          </a>
          <a
            href="https://www.facebook.com/PICK-for-DSM-106692937936709"
            target="_blank"
          >
            <img src={FacebookLogo} />
          </a>
        </div>
      </S.Footer>
    </S.Container>
  );
};

export default Developer;
