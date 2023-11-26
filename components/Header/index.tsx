import HamburgerMenuIcon from '@/app/icons/Icon';

const Header = () => (
  <nav className='flex items-center bg-bg-400 h-[70px] border-bottom border-solid border-b-4 border-accent-500'>
    <div className='md:block hidden pl-8'>
      <HamburgerMenuIcon className='' size={16} />
    </div>
    <h1 className='pl-8 text-primary-100 text-[34px] subpixel-antialiased font-medium drop-shadow-title'>
      Tutorial Axum
    </h1>

    <div className='md:hidden flex flex-1 justify-end pr-8'>
      <HamburgerMenuIcon size={16} />
    </div>
  </nav>
);

export default Header;
