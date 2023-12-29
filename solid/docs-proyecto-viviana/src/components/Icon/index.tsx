import { IconType } from '../types';

interface IconProps {
  icon: any;
  type?: IconType;
  size: string;
  color?: string;
  className?: string;
  onClick?: Function;
}

export const Icon = ({ size, icon, type = IconType.BORDERLESS }: IconProps) => {
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
          {icon({ color: '#75ABC7', size: size })}
        </div>
        <div className='absolute z-0 mt-[3px]'>
          {icon({ color: '#DF5C9A', size: size })}
        </div>
      </div>
    </div>
  );
};
