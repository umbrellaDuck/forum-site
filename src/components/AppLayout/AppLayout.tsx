import Image from 'next/image';
import Link from 'next/link';
import { ReactNode } from 'react';
import logo from '../../../public/logo.svg';
import userPlus from '../../../public/user-plus.svg';
import Button from '../Button.tsx/Button';
interface Props {
  children: ReactNode;
}

const AppLayout = ({ children }: Props) => {
  return (
    <div className='flex flex-col h-screen'>
      <header className='flex justify-between px-9 py-6 border-border-gray border-b items-center fixed w-full'>
        <Link href='/' className='flex'>
          <Image alt='Logo' src={logo} className='w-6 h-7 mr-4' />
          <span>
            alem<strong>help</strong>
          </span>
        </Link>
        <div className='flex'>
          <Link
            href='/signup'
            className=' bg-buttonOrange px-5 py-3 rounded-[5px] flex text-white items-center mr-4 h-[38px] '
          >
            <Image alt='Logo' src={userPlus} className='w-3 h-3 mr-3' />
            <span className='text-xs font-black'>Register</span>
          </Link>
          <Link
            href='login'
            className='bg-EA px-5 py-3 rounded-[5px] h-[38px] flex items-center'
          >
            <span className='text-primaryColor font-black text-xs'>Login</span>
          </Link>
        </div>
      </header>
      <main className='pt-[86px] h-full'>{children}</main>
    </div>
  );
};

export default AppLayout;
