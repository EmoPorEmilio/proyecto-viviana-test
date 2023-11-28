'use client';
import { useState } from 'react';

const Switch = () => {
  const leftSelectedStyle = 'left-0 w-[142px] border-l-2';
  const rightSelectedStyle = 'left-[142px] w-[108px] border-r-2';
  const textSelected = 'font-extrabold text-primary-300 ';
  const textUnselected = 'font-medium text-primary-600 tracking-wider ';
  const [leftSelected, setLeftSelected] = useState(true);
  return (
    <div
      onClick={() => setLeftSelected((prev) => !prev)}
      className='relative bg-bg-400 rounded-full  w-[250px]'>
      <div
        className={`${
          leftSelected ? leftSelectedStyle : rightSelectedStyle
        } transition-all  duration-500 ease-in-out z-0 absolute bg-primary-600 rounded-full h-8 border-accent-300`}></div>
      <div className='flex z-10 h-8 justify-around'>
        <button
          className={`${
            leftSelected ? textSelected : textUnselected
          } transition-all ease-in-out duration-500 z-10 text-lg flex justify-center items-center`}>
          <span>TENDENCIAS</span>
        </button>
        <button
          className={`${
            leftSelected ? textUnselected : textSelected
          } transition-all ease-in-out  duration-500 z-10 text-lg flex justify-center items-center`}>
          <span>ÚLTIMOS</span>
        </button>
      </div>
    </div>
  );
};
export default Switch;
