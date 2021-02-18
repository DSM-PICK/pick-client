import React from "react";
import * as S from "../../styles";

const StudentAddInput = ({
  inputChangeHandler,
  similerStudents,
  studentClickHandler
}) => {
  return (
    <S.FormStudentAddInput>
      <textarea
        onChange={event => inputChangeHandler(event.target.value)}
        placeholder="검색..."
      />
      <div>
        {similerStudents.map(similerStudent => (
          <div onClick={() => studentClickHandler(similerStudent)}>
            {similerStudent}
          </div>
        ))}
      </div>
    </S.FormStudentAddInput>
  );
};

export default StudentAddInput;
