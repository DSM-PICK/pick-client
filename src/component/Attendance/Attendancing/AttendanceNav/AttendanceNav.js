import React, { useState } from "react";
import * as S from "./styles";
import AttendanceNavItem from "./AttendanceNavItem/AttendanceNavItem";

const AttendanceNav = props => {
  const { floors, Floor } = props;

  const [dones, setDones] = useState(floors);

  const doneAtt = location => {
    setDones(
      dones.map(done =>
        done.location === location ? { ...done, done: "done" } : done
      )
    );
  };

  return (
    <S.Container>
      {dones !== undefined &&
        dones.map((data, index) => (
          <AttendanceNavItem
            key={data.location}
            data={data}
            floor={Floor[0]}
            index={index}
            doneAtt={doneAtt}
            priority={data.priority}
          />
        ))}
    </S.Container>
  );
};

export default AttendanceNav;
