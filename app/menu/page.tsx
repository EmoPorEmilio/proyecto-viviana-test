import { sen } from '@/app/fonts';
import Link from 'next/link';

export default function Menu() {
  return (
    <div className='flex flex-col h-[100dvh] w-[100dvw]'>
      <div className='w-full h-14 bg-bg-400 flex justify-center items-center border-b-4 border-accent-500 border-solid'>
        <span className='text-4xl font-bold tracking-wider text-primary-300'>
          ANUNCIOS
        </span>
      </div>
      <div className='w-full h-10 bg-primary-600 border-b-4 border-bg-100 flex items-center pl-4'>
        <Link href='/' className={`${sen.className} text-xl text-gray-200`}>
          Proyecto Viviana
        </Link>
      </div>
      <div className='w-full h-10 bg-primary-600 border-b-4 border-bg-100 flex items-center pl-4'>
        <Link href='/' className={`${sen.className} text-xl text-gray-200`}>
          Proyecto Viviana
        </Link>
      </div>
      <div className='w-full h-10 bg-primary-600 border-b-4 border-bg-100 flex items-center pl-4'>
        <Link href='/' className={`${sen.className} text-xl text-gray-200`}>
          Proyecto Viviana
        </Link>
      </div>
      <div className='w-full h-10 bg-primary-600 border-b-4 border-bg-100 flex items-center pl-4'>
        <Link
          href='/mobile'
          className={`${sen.className} text-xl text-gray-200`}>
          Mobile
        </Link>
      </div>
      <div className='w-full h-14 bg-bg-400 flex justify-center items-center border-b-4 border-accent-500 border-solid'>
        <span className='text-4xl font-bold tracking-wider text-primary-300'>
          TUTORIALES
        </span>
      </div>
    </div>
  );
}
