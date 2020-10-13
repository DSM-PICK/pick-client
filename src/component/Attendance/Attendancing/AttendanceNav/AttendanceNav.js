import React, { useState } from "react";
import * as S from "./styles";
import AttendanceNavItem from "./AttendanceNavItem/AttendanceNavItem";

const AttendanceNav = props => {
  const { floors, a } = props;

  const [dones, setDones] = useState(floors);

  const doneAtt = location => {
    setDones(
      dones.map(done =>
        done.location === location ? { ...done, done: "done" } : done
      )
    );
  };

  console.log(a);
  console.log(props);

  return (
    <S.Container>
      {dones !== undefined &&
        dones.map((data, index) => (
          <AttendanceNavItem
            key={data.location}
            data={data}
            index={index}
            doneAtt={doneAtt}
          />
        ))}
    </S.Container>
  );
};

export default AttendanceNav;
