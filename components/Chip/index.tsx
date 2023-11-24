import { sen } from '@/app/fonts';

export enum ChipType {
  Primary = 'primary',
}

interface ButtonProps {
  onClick: Function;
  type: ChipType;
  children: React.ReactNode;
}

export const Chip = ({ onClick, type, children }: ButtonProps) => {
  const chipnDynamicClass = () => {
    switch (type) {
      case ChipType.Primary:
        return 'bg-primary-700  text-primary-200 shadow-primary-chip';
      default:
        return 'bg-primary-600 hover:bg-primary-500 text-primary-100';
    }
  };
  return (
    <button
      className={` ${
        sen.className
      } ${chipnDynamicClass()} w-auto rounded-full px-4  py-1 font-medium text-sm tracking-wide`}>
      {children}
    </button>
  );
};
