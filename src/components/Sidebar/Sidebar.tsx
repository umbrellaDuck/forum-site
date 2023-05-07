import Image from 'next/image';
import list from '../../../public/list.svg';
import Link from 'next/link';
interface Props {
  className?: string;
}

const Sidebar = ({ className }: Props) => {
  return (
    <div
      className={`fixed h-full top-[86.5px] w-[310px] bg-white px-[50px] pt-10 ${className}`}
    >
      <strong className='font-medium text-xs text-placeHolderTextColor mb-4 block'>
        MENU
      </strong>
      <ul>
        <li>
          <Link href='./' className='flex'>
            <Image alt='Questions' src={list} />
            <span className='font-medium text-[13px] ml-2'>Questions</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
