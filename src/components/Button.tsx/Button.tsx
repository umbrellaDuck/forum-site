import { ReactNode } from 'react';
import cn from 'clsx';

interface Props extends React.ComponentPropsWithoutRef<'button'> {
  children: ReactNode;
  className?: string;
  size?: 'xs' | 'md' | 'full';
  disabled?: boolean;
  color?: 'blue' | 'gray' | 'orange';
}

const basicClassName = 'flex items-center justify-center';
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
      'px-[5px] h-[25px] rounded-[100px] text-sm': size === 'xs',
      'px-3 h-[38px] rounded-[5px] text-sm': size === 'md',
      'opacity-50 border-black border': disabled,
      'bg-buttonOrange text-white ': color === 'orange',
      'bg-buttonGrayColor font-': color === 'gray',
      'bg-primaryColor text-white': color === 'blue',
    },
    className,
    basicClassName
  );

  return (
    <button {...rest} className={rootClassName}>
      {children}
    </button>
  );
};

export default Button;
