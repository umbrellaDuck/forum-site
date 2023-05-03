interface Props extends React.ComponentPropsWithoutRef<'input'> {}
const rootClassName = 'rounded-[5px] border-borderGrayColor border';

const Input = ({ ...rest }: Props) => {
  return (
    <input
      className='rounded-[5px] border-borderGrayColor border placeholder-placeHolderTextColor placeholder:text-sm h-[42px] px-4 w-full placeholder:text-buttonGrayColor placeholder:font-light'
      {...rest}
    />
  );
};

export default Input;
