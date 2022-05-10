import React, { useState } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import './Box.scss';

const Box = ({ row, column }) => {
  const [hovered, setHovered] = useState(true);
  return (
    <div>
      <div
        onMouseOver={() => {
          setHovered((prev) => !prev);
        }}
        className={`box-wrapper ${hovered ? 'hovered' : ''}`}
      ></div>
    </div>
  );
};

export default Box;
