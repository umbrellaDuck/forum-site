import { ReactNode } from 'react';
import Header from '../Header/Header';
interface Props {
  children: ReactNode;
}

const AppLayout = ({ children }: Props) => {
  return (
    <>
      <Header />
      <main className='pt-[86px] h-full'>{children}</main>
    </>
  );
};

export default AppLayout;
