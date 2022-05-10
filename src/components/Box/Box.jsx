import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Box.scss';

const Box = ({ row, column }) => {
  const [hovered, setHovered] = useState(true);
  const notify = (row, column) => toast(`Row ${row} Column ${column}`);
  return (
    <div>
      <div
        onMouseEnter={() => {
          setHovered((prev) => !prev);
          notify(row, column);
        }}
        className={`box-wrapper ${hovered ? 'hovered' : ''}`}
      ></div>
      <ToastContainer autoClose={300} />
    </div>
  );
};

export default Box;
