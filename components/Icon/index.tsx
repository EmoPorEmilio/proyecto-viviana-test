'use client';
import { IconType } from '../types';
import { MdMenu } from 'react-icons/md';

interface IconProps {
  type?: IconType;
  size: number;
  color?: string;
  className?: string;
  onClick?: Function;
}

export const HamburgerMenuIcon = ({
  size,
  color,
  onClick,
  type = IconType.BORDERLESS,
}: IconProps) => {
  const fullStyle = 'bg-bg-400 border-2 border-primary-700 ';
  const outlineStyle = 'border-2 ';
  const style =
    type === IconType.FULL
      ? fullStyle
      : type === IconType.OUTLINE
      ? outlineStyle
      : '';
  return (
    <div
      className={`${style} flex h-[50px] w-[50px] rounded-full border-primary-700 justify-center items-center`}>
      <div className='flex justify-center items-center'>
        <div className='absolute z-10 mt-[-1px]'>
          <MdMenu color='#75ABC7' size='40px' />
        </div>
        <div className='absolute z-0 mt-[3px]'>
          <MdMenu color='#DF5C9A' size='40px' />
        </div>
      </div>
    </div>
  );
};
