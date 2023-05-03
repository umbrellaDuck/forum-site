import Button from '../Button.tsx/Button';
import Input from '../Input/Input';
import Image from 'next/image';
import xCircleIcon from '../../../public/x-circle.svg';
import checkIcon from '../../../public/check.svg';

let isValid = true;

const LoginForm = () => {
  return (
    <form>
      <h1 className='text-2xl font-bold mb-5'>Join Alem Community </h1>
      <p className='leading-6 font-thin mb-5'>
        Get more features and priviliges by joining
        <div>to the most helpful community</div>
      </p>
      <div className='gap-4 flex flex-col'>
        <div className='relative'>
          <label htmlFor='register-id' className='text-base mb-2 inline-block'>
            Username
          </label>
          <Input id='register-id' placeholder='Username' />
          {isValid && (
            <Image
              alt='status-icon'
              src={isValid ? checkIcon : xCircleIcon}
              className='absolute right-4 bottom-[14px]'
            />
          )}
        </div>
        <div className='relative'>
          <label
            htmlFor='register-email'
            className='text-base mb-2 inline-block'
          >
            Email
          </label>
          <Input id='register-email' placeholder='Email' />
          {isValid && (
            <Image
              alt='status-icon'
              src={isValid ? checkIcon : xCircleIcon}
              className='absolute right-4 bottom-[14px]'
            />
          )}
        </div>
        <div className='relative'>
          <label
            htmlFor='register-password'
            className='text-base mb-2 inline-block'
          >
            Password
          </label>
          <Input id='register-password' placeholder='Password' />
          {isValid && (
            <Image
              alt='status-icon'
              src={isValid ? checkIcon : xCircleIcon}
              className='absolute right-4 bottom-[14px]'
            />
          )}
        </div>
        <div className='relative'>
          <label
            htmlFor='register-repeat-pasword'
            className='text-base mb-2 inline-block'
          >
            Repeat pasword
          </label>
          <Input id='register-repeat-pasword' placeholder='Repeat pasword' />
          {isValid && (
            <Image
              alt='status-icon'
              src={isValid ? checkIcon : xCircleIcon}
              className='absolute right-4 bottom-[14px]'
            />
          )}
        </div>
      </div>
      {
        <p className='text-[#FF0000] text-xs mt-6 mb-6 font-bold ml-4'>
          Email already registered!
        </p>
      }
      <Button
        color='orange'
        size='md'
        className='w-full'
        type='submit'
        disabled
      >
        <span className='text-xs font-black'>REGISTER</span>
      </Button>
    </form>
  );
};

export default LoginForm;
