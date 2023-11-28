import Link from 'next/link';
import Item from './Item';

interface LateralNavProps {
  transparent?: boolean;
}

const LateralNav = ({ transparent = false }: LateralNavProps) => {
  const bgColor = transparent ? '' : 'bg-bg-200';
  return (
    <div
      className={`hidden md:block w-[300px] ${bgColor} border-r border-primary-600 p-3 m-0`}>
      <Item title='Comenzando'></Item>
      <div className='flex h-full'>
        <div className='w-1 h-5 bg-accent-300'></div>
        <div className={`flex flex-col flex-1 pl-4 h-full`}>
          <span className='text-primary-300 font-medium underline underline-offset-4'>
            ¿Qué es Axum?
          </span>
          <span className='text-gray-200 font-normal'>Test</span>
          <span className='text-gray-200 font-normal'>Test</span>
          <span className='text-gray-200 font-normal'>Test</span>
          <span className='text-gray-200 font-normal'>Test</span>
          <span className='text-gray-200 font-normal'>Test</span>
          <Link
            className='text-gray-200 font-normal hover:text-gray-100 hover:underline underline-offset-4'
            href='/mobile'>
            Mobile
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LateralNav;
