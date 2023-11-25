'use client';

interface IconProps {
  size: number;
  color?: string;
  className?: string;
  onClick?: Function;
}
const HamburgerMenuIcon = ({ size, color, onClick, ...props }: IconProps) => {
  let width = 31;
  let height = 21;
  return (
    <svg
      onClick={() => (onClick ? onClick() : null)}
      {...props}
      width={width}
      height={height}
      viewBox='0 0 31 21'
      fill='none'>
      <path
        d='M0.125 20.75H30.875V17.3333H0.125V20.75ZM0.125 12.2083H30.875V8.79167H0.125V12.2083ZM0.125 0.25V3.66667H30.875V0.25H0.125Z'
        fill='#75ABC7'
      />
    </svg>
  );
};
export default HamburgerMenuIcon;
