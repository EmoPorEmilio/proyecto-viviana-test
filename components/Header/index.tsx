import { Icon } from '@/components/Icon';
import { MdMenu } from 'react-icons/md';
import Link from 'next/link';
import Image from 'next/image';

const Header = () => (
  <nav className='flex items-center bg-bg-400 h-[70px] border-bottom border-solid border-b-4 border-accent-500'>
    <div className='md:pl-8 pl-1 flex items-center'>
      <Image
        src='/Logo.png'
        width={328}
        height={42}
        alt='logo'
        unoptimized/>
      </div>
      {/*  <span className='md:pl-8 pl-1 text-[34px] subpixel-antialiased font-light text-primary-700 shadow-none flex items-center'>
      PROYECTO
      <span className='z-10 text-primary-500  font-black drop-shadow-logo'>
        VIVIANA
      </span>
    </span> */}

    <Link
      href='/menu'
      className='md:hidden flex flex-1 justify-end md:pr-8 pr-1'>
      <Icon icon={MdMenu} size='40px' />
    </Link>
  </nav>
);

export default Header;
