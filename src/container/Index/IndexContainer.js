import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import Developer from "../../component/Developer/Developer";
import Index from "../../component/Index/Index";
import { checkIsLogin } from "../../lib/requestApi";

const IndexContainer = () => {
  const history = useHistory();
  useEffect(() => {
    checkIsLogin().then(isLogin => {
      isLogin && history.push("/t/main");
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
