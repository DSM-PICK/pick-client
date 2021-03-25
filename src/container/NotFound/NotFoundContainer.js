import React, { useEffect } from "react";
import { isTablet } from "react-device-detect";
import NotFound from "../../component/NotFound/NotFound";

const NotFoundContainer = () => {
  useEffect(() => {
    setTimeout(() => {
      alert("지원하지 않는 페이지입니다.");
      window.location.href = isTablet ? "/t/main" : "/";
    }, 500);
  }, []);
  return <NotFound />;
};

export default NotFoundContainer;
