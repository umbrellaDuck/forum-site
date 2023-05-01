import { ReactNode } from 'react';
import cn from 'clsx';

interface Props {
  children: ReactNode;
  className?: string;
  size?: 'xs' | 'md';
  disabled?: boolean;
  color?: 'blue' | 'gray' | 'orange';
}

const Button = ({
  children,
  className,
  size,
  disabled,
  color,
  ...rest
}: Props) => {
  const rootClassName = cn(
    {
      'px-[5px] py-[10px] rounded-[100px] text-sm': size === 'xs',
      'px-3 py-5 rounded-[5px] text-sm': size === 'md',
      'opacity-50': disabled,
      'bg-buttonOrange text-white ': color === 'orange',
      'bg-buttonGrayColor font-': color === 'gray',
      'bg-primaryColor text-white': color === 'blue',
    },
    className
  );

  return (
    <button {...rest} className={rootClassName}>
      {children}
    </button>
  );
};

export default Button;
