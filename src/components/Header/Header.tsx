import Image from 'next/image';
import Link from 'next/link';
import userPlus from '../../../public/user-plus.svg';
import logo from '../../../public/logo.svg';

const Header = () => {
  return (
    <>
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
            className='bg-buttonOrange px-5 py-3 rounded-[5px] flex text-white items-center mr-4 h-[38px]'
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
    </>
  );
};

export default Header;
