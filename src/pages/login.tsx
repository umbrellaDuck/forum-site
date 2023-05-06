import AppLayout from '@/components/AppLayout/AppLayout';
import LoginForm from '@/components/LoginForm/LoginForm';
import Image from 'next/image';
import computer from '../../public/computer.jpg';
const Login = () => {
  return (
    <>
      <AppLayout>
        <div className='grid grid-cols-5 min-h-full bg-bgGray'>
          <div className='col-span-2  flex items-center px-16 mx-auto'>
            <LoginForm />
          </div>
          <div className='col-span-3'>
            <Image alt='computer' src={computer} className='h-full w-full' />
          </div>
        </div>
      </AppLayout>
    </>
  );
};

export default Login;
