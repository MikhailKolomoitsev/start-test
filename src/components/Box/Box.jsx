import React, { useState } from 'react';
import './Box.scss';

const Box = ({ row}) => {
  const [hovered, setHovered] = useState(true);

  return (
    <div
      onMouseOver={() => {
        setHovered((prev) => !prev);
        console.log('row', row)
      }}
      className={`box-wrapper ${hovered ? 'hovered' : ''}`}
    ></div>
  );
};

export default Box;
