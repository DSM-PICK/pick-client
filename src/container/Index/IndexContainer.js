import React, { useEffect } from "react";
import { useHistory } from "react-router";
import Developer from "../../component/Developer/Developer";
import Index from "../../component/Index/Index";
import { checkIsLogin } from "../../lib/requestApi";

const IndexContainer = () => {
  const history = useHistory();
  useEffect(() => {
    checkIsLogin().then(isLogin => {
      if (isLogin) {
        history.push("/main");
      }
    });
  }, []);
  return (
    <div>
      <Index />
      <Developer />
    </div>
  );
};

export default IndexContainer;
