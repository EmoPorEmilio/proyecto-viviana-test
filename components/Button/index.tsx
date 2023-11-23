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
        return 'bg-primary-700  text-primary-400 shadow-sm shadow-primary-200';
      case ButtonType.Secondary:
        return 'bg-darkest-bg  text-primary-500 border-solid border border-primary-500';
      case ButtonType.Tertiary:
        return 'bg-tertiary-600 hover:bg-tertiary-500 text-tertiary-100';
      case ButtonType.Danger:
        return 'bg-danger-600 hover:bg-danger-500 text-danger-100';
      case ButtonType.Warning:
        return 'bg-warning-600 hover:bg-warning-500 text-warning-100';
      case ButtonType.Success:
        return 'bg-success-600 hover:bg-success-500 text-success-100';
      case ButtonType.Info:
        return 'bg-info-600 hover:bg-info-500 text-info-100';
      case ButtonType.Light:
        return 'bg-light-600 hover:bg-light-500 text-light-100';
      case ButtonType.Dark:
        return 'bg-dark-600 hover:bg-dark-500 text-dark-100';
      case ButtonType.Link:
        return 'bg-link-600 hover:bg-link-500 text-link-100';
      case ButtonType.Text:
        return 'bg-text-600 hover:bg-text-500 text-text-100';
      default:
        return 'bg-primary-600 hover:bg-primary-500 text-primary-100';
    }
  };
  return (
    <button
      className={`${
        sen.className
      } ${buttonDynamicClass()} w-auto rounded-lg px-4 py-2 text-base `}>
      {children}
    </button>
  );
};
