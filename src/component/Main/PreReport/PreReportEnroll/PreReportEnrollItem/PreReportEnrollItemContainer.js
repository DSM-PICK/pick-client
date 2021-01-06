import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import { deleteNames } from "../../../../../module/action/pre_report";
import PreReportEnrollItem from "./PreReportEnrollItem";

const PreReportEnrollItemContainer = props => {
  const { name } = props;

  const dispatch = useDispatch();

  const onDelete = useCallback(() => {
    dispatch(deleteNames(name));
  }, [name, dispatch]);

  return <PreReportEnrollItem name={name} onDelete={onDelete} />;
};

export default PreReportEnrollItemContainer;
