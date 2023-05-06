import Image from 'next/image';
import more from '../../../public/feather_more-vertical.svg';
import commentImg from '../../../public/comment.svg';
import { PostType } from '@/pages';
import logo from '../../../public/logo.svg';

const PostList = ({ post }: { post: PostType }) => {
  const { description, id, likes, title, user, userImg, date } = post;

  return (
    <li className='p-8 shadow-md mb-5 border'>
      <div className='flex justify-between mb-3'>
        <div className='flex items-center'>
          <Image
            alt='user-image'
            src={logo}
            className='w-10 h-10 rounded-full bg-black mr-3'
          />
          <div>
            <strong className='text-sm font-normal'>{user}</strong>
            <div className='text-placeHolderTextColor text-[10px]'>{date}</div>
          </div>
        </div>
        <Image
          alt='user-image'
          src={more}
          className='w-6 h-6 rounded-full cursor-pointer'
        />
      </div>
      <div className='text-sm mb-7'>
        <h1 className='font-bold mb-2'>{title}</h1>
        <p className='font-light'>{description}</p>
      </div>
      <div className='flex items-center m-auto justify-end'>
        <div className='flex items-center mr-3'>
          <Image
            alt='user-image'
            src={commentImg}
            className='w-4 h-4 rounded-full cursor-pointer mr-1'
          />
          <span className='text-placeHolderTextColor'>{likes}</span>
        </div>
        <div className='flex items-center'>
          <Image
            alt='user-image'
            src={commentImg}
            className='w-4 h-4 rounded-full cursor-pointer mr-1'
          />
          <span className='text-placeHolderTextColor'>number</span>
        </div>
      </div>
    </li>
  );
};

export default PostList;
