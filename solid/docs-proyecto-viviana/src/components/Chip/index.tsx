export enum ChipType {
  Primary = 'primary',
}

interface ChipProps {
  onClick?: Function;
  type: ChipType;
  text: string;
}

export const Chip = ({ onClick, type, text }: ChipProps) => {
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
      className={`${chipnDynamicClass()} flex justify-center items-center h-6 w-auto rounded-full px-4  py-1 font-medium text-sm tracking-wide`}>
      <span>{text}</span>
    </button>
  );
};
