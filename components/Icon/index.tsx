'use client';
import { IconType } from '../types';

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
  let width = 31;
  let height = 21;
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
          <svg
            onClick={() => (onClick ? onClick() : null)}
            width={width}
            height={height}
            viewBox='0 0 31 21'
            fill='none'>
            <path
              d='M0.125 20.75H30.875V17.3333H0.125V20.75ZM0.125 12.2083H30.875V8.79167H0.125V12.2083ZM0.125 0.25V3.66667H30.875V0.25H0.125Z'
              fill='#75ABC7'
            />
          </svg>
        </div>
        <div className='absolute z-0 mt-[2px]'>
          <svg
            onClick={() => (onClick ? onClick() : null)}
            width={width}
            height={height}
            viewBox='0 0 31 21'
            fill='none'>
            <path
              d='M0.125 20.75H30.875V17.3333H0.125V20.75ZM0.125 12.2083H30.875V8.79167H0.125V12.2083ZM0.125 0.25V3.66667H30.875V0.25H0.125Z'
              fill='#DF5C9A'
            />
          </svg>
        </div>
      </div>
    </div>
  );
};
