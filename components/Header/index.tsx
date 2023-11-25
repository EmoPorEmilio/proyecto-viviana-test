import HamburgerMenuIcon from '@/app/icons/Icon';

const Header = () => (
  <nav className='flex items-center bg-darkest-bg h-[70px] border-bottom border-solid border-b-4 border-accent-500'>
    <h1 className='text-primary-100 text-[34px] subpixel-antialiased font-medium drop-shadow-title'>
      <HamburgerMenuIcon /> Tutorial Axum
    </h1>
  </nav>
);

export default Header;
