import Button from '../Button.tsx/Button';
import Input from '../Input/Input';
import { SubmitHandler, useForm } from 'react-hook-form';

const defaultValues = {
  username: '',
  email: '',
  password: '',
  repeatPassword: '',
};

const LoginForm = () => {
  const {
    control,
    getValues,
    formState: { isValid },
    handleSubmit,
  } = useForm({
    defaultValues,
    mode: 'onChange',
  });

  type FormValues = {
    username: string;
    email: string;
    password: string;
    repeatPassword: string;
  };

  const isExistingEmail = true;

  const onSubmit: SubmitHandler<FormValues> = (data, e) => {
    console.log('submit');
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1 className='text-2xl font-bold mb-5'>Join Alem Community </h1>
      <p className='leading-6 font-thin mb-5'>
        Get more features and priviliges by joining
        <br />
        to the most helpful community
      </p>
      <div className='gap-4 flex flex-col'>
        <div className='relative'>
          <label
            htmlFor='register-username'
            className='text-base mb-2 inline-block'
          >
            Username
          </label>
          <Input
            id='register-username'
            placeholder='Username'
            name='username'
            rules={{ minLength: 2, maxLength: 12, required: true }}
            control={control}
          />
        </div>
        <div className='relative'>
          <label
            htmlFor='register-email'
            className='text-base mb-2 inline-block'
          >
            Email
          </label>
          <Input
            id='register-email'
            placeholder='Email'
            name='email'
            rules={{
              required: true,
            }}
            control={control}
          />
        </div>
        <div className='relative'>
          <label
            htmlFor='register-password'
            className='text-base mb-2 inline-block'
          >
            Password
          </label>
          <Input
            id='register-password'
            placeholder='Password'
            name='password'
            rules={{ minLength: 4, maxLength: 16, required: true }}
            control={control}
          />
        </div>
        <div className='relative'>
          <label
            htmlFor='register-repeat-password'
            className='text-base mb-2 inline-block'
          >
            Repeat pasword
          </label>
          <Input
            id='register-repeat-paswsord'
            placeholder='Repeat pasword'
            name='repeatPassword'
            rules={{
              validate: (val: string) => val == getValues('password'),
            }}
            control={control}
          />
        </div>
      </div>
      {isExistingEmail && (
        <p className='text-[#FF0000] text-xs mt-6 mb-6 font-bold ml-4'>
          Email already registered!
        </p>
      )}
      <Button
        color='orange'
        size='md'
        className='w-full'
        type='submit'
        disabled={!isValid}
      >
        <span className='text-xs font-black'>REGISTER</span>
      </Button>
    </form>
  );
};

export default LoginForm;
