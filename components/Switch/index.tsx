'use client';
import { useState } from 'react';

const Switch = () => {
  const leftSelectedStyle = 'left-0 w-[150px] border-l-2';
  const rightSelectedStyle = 'left-[150px] w-[110px] border-r-2';
  const textSelected = () => 'font-extrabold text-primary-300 ';
  const textUnselected = () => 'font-medium text-primary-600 tracking-wider ';
  const [leftSelected, setLeftSelected] = useState(true);
  return (
    <div className='relative bg-bg-400 rounded-full  w-[260px]'>
      <div
        className={`${
          leftSelected ? leftSelectedStyle : rightSelectedStyle
        } transition-all  duration-500 ease-in-out z-0 absolute bg-primary-600 rounded-full w-[150px] h-8 border-accent-300`}></div>
      <div className='flex z-10 h-8 justify-center'>
        <div
          onClick={() => setLeftSelected(true)}
          className={`${
            leftSelected ? textSelected() : textUnselected()
          } transition-all ease-in-out duration-500 z-10 w-[150px] text-lg flex justify-center items-center`}>
          <span>TENDENCIAS</span>
        </div>
        <div
          onClick={() => setLeftSelected(false)}
          className={`${
            leftSelected ? textUnselected() : textSelected()
          } transition-all ease-in-out  duration-500 z-10 w-[100px] text-lg flex justify-center items-center`}>
          <span>ÚLTIMOS</span>
        </div>
      </div>
    </div>
  );
};
export default Switch;
