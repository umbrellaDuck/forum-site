import Button from '../Button.tsx/Button';
import TextInput from '../Input/TextInput';
import { useForm } from 'react-hook-form';

const LoginForm = () => {
  const { control, handleSubmit } = useForm();
  const isLoginError = true;
  const onSubmit = () => {
    console.log('login success');
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1 className='text-2xl font-bold mb-5'>We&apos;ve missed you!</h1>
      <p className='leading-6 font-thin mb-5'>
        More than 150 questions are waiting for
        <br /> your wise suggestions!
      </p>
      <TextInput name='username' type='text' control={control} />
      <div className='mb-5' />
      <TextInput name='password' type='password' control={control} />
      {isLoginError && (
        <p className='text-[#FF0000] text-xs mt-5 mb-5 font-bold ml-4'>
          Email already registered!
        </p>
      )}
      <Button color='orange' size='md' className='w-full' type='submit'>
        <span className='text-xs font-black'>Login</span>
      </Button>
    </form>
  );
};

export default LoginForm;
