import React, { useState } from 'react';
import './Box.scss';

const Box = ({number}) => {
  const [hovered, setHovered] = useState(true);

  return (
    <div
      onMouseOver={() => {
        setHovered((prev) => !prev);
        console.log(number)
      }}
      className={`box-wrapper ${hovered ? 'hovered' : ''}`}
    ></div>
  );
};

export default Box;
