import Image from 'next/image';
import xCircleIcon from '../../../public/x-circle.svg';
import checkIcon from '../../../public/check.svg';
interface Props {
  isValid: boolean;
}
const rootClassName = 'rounded-[5px] border-borderGrayColor border';

const Input = ({ isValid, ...rest }: Props) => {
  return (
    <>
      <div className='relative'>
        <input
          className='rounded-[5px] border-borderGrayColor border placeholder-placeHolderTextColor placeholder:text-sm h-[42px] px-4'
          {...rest}
        />
        {isValid && (
          <Image
            alt='status-icon'
            src={isValid ? checkIcon : xCircleIcon}
            className='absolute right-4 bottom-[14px]'
          />
        )}
      </div>
    </>
  );
};

export default Input;
