import AppLayout from '@/components/AppLayout/AppLayout';
import Image from 'next/image';
import friends from '../../public/friend.jpg';

const SignUp = () => {
  return (
    <>
      <AppLayout>
        <div className='grid grid-cols-5 min-h-full'>
          <div className='col-span-2'>asdf</div>
          <div className='col-span-3 '>
            <Image alt='frinds' src={friends} className='h-full' />
          </div>
        </div>
      </AppLayout>
    </>
  );
};

export default SignUp;
