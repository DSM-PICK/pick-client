import React from "react";
import { Eye, CloseEye } from "../../../asset";

const PasswordEye = ({ onClick, showPassword }) => {
  return <img src={showPassword ? Eye : CloseEye} onClick={onClick} />;
};

export default PasswordEye;
