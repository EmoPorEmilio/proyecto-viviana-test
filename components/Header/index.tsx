import { Icon } from '@/components/Icon';
import { MdMenu } from 'react-icons/md';
import Link from 'next/link';

const Header = () => (
  <nav className='flex items-center bg-bg-400 h-[70px] border-bottom border-solid border-b-4 border-accent-500'>
    <Link href='/menu' className='md:flex hidden md:pl-8 pl-1'>
      <Icon icon={MdMenu} size='40px' />
    </Link>
    <span className='md:pl-8 pl-1 text-[34px] subpixel-antialiased font-light text-primary-700 shadow-none flex items-center'>
      PROYECTO
      <span className=' text-primary-500  font-black drop-shadow-logo'>
        VIVIANA
      </span>
    </span>

    <Link
      href='/menu'
      className='md:hidden flex flex-1 justify-end md:pr-8 pr-1'>
      <Icon icon={MdMenu} size='40px' />
    </Link>
  </nav>
);

export default Header;
