import { sen } from '@/app/fonts';
export enum ButtonType {
  Primary = 'primary',
  Secondary = 'secondary',
  Tertiary = 'tertiary',
  Danger = 'danger',
  Warning = 'warning',
  Success = 'success',
  Info = 'info',
  Light = 'light',
  Dark = 'dark',
  Link = 'link',
  Text = 'text',
}

interface ButtonProps {
  onClick: Function;
  type: ButtonType;
  children: React.ReactNode;
}

export const Button = ({ onClick, type, children }: ButtonProps) => {
  const buttonDynamicClass = () => {
    switch (type) {
      case ButtonType.Primary:
        return 'font-medium bg-primary-700  text-primary-200 shadow-primary-chip';
      case ButtonType.Secondary:
        return 'font-regular  bg-darkest-bg  text-primary-500 border-solid border border-primary-500';
    }
  };
  return (
    <button
      className={`tracking-wider ${buttonDynamicClass()} w-auto rounded-lg px-4 py-2 `}>
      {children}
    </button>
  );
};
