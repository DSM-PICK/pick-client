import React, { useEffect } from "react";
import NotFound from "../../component/NotFound/NotFound";

const NotFoundContainer = () => {
  useEffect(() => {
    setTimeout(() => {
      alert("지원하지 않는 페이지입니다.");
      window.location.href = "/t/main";
      // window.location.href = isTablet ? "/t/main" : "/"; 추후 데스크톱 배포시 지원
    }, 500);
  }, []);
  return <NotFound />;
};

export default NotFoundContainer;
