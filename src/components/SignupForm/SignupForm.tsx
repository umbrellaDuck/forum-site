import Button from '../Button.tsx/Button';
import TextInput from '../Input/TextInput';
import { SubmitHandler, useForm } from 'react-hook-form';

const defaultValues = {
  username: '',
  email: '',
  password: '',
  repeatPassword: '',
};

const SignupForm = () => {
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
    console.log('submit success');
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
        <TextInput
          id='register-username'
          placeholder='Username'
          name='username'
          rules={{ minLength: 2, maxLength: 12, required: true }}
          control={control}
        />
        <TextInput
          id='register-email'
          placeholder='Email'
          name='email'
          rules={{
            required: true,
            pattern: {
              value: /^[\w\-._]+@[\w\-._]+\.[A-Za-z]+/,
              message: 'email is not aacceptable',
            },
          }}
          control={control}
        />
        <TextInput
          id='register-password'
          placeholder='Password'
          name='password'
          rules={{ minLength: 4, maxLength: 16, required: true }}
          control={control}
        />
        <TextInput
          id='register-repeat-paswsord'
          placeholder='Repeat pasword'
          name='repeatPassword'
          rules={{
            validate: (val: string) => val == getValues('password'),
          }}
          control={control}
        />
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

export default SignupForm;
