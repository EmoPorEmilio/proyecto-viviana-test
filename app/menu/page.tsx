import { sen } from '@/app/fonts';

export default function Menu() {
  return (
    <div className='flex flex-col h-full w-full h-[100dvh] w-[100dvw]'>
      <div className='w-full h-14 bg-bg-400 flex justify-center items-center border-b-4 border-accent-500 border-solid'>
        <span className='text-4xl font-bold tracking-wider text-primary-300'>
          ANUNCIOS
        </span>
      </div>
      <div className='w-full h-10 bg-primary-700 border-b-2 border-bg-100 flex items-center pl-4'>
        <span className={`${sen.className} text-xl text-gray-200`}>
          Proyecto Viviana
        </span>
      </div>
      <div className='w-full h-10 bg-primary-700 border-b-2 border-bg-100 flex items-center pl-4'>
        <span className={`${sen.className} text-xl text-gray-200`}>
          Proyecto Viviana
        </span>
      </div>
      <div className='w-full h-10 bg-primary-700 border-b-2 border-bg-100 flex items-center pl-4'>
        <span className={`${sen.className} text-xl text-gray-200`}>
          Proyecto Viviana
        </span>
      </div>
      <div className='w-full h-10 bg-primary-700 border-b-2 border-bg-100 flex items-center pl-4'>
        <span className={`${sen.className} text-xl text-gray-200`}>
          Proyecto Viviana
        </span>
      </div>
      <div className='w-full h-14 bg-bg-400 flex justify-center items-center border-b-4 border-accent-500 border-solid'>
        <span className='text-4xl font-bold tracking-wider text-primary-300'>
          TUTORIALES
        </span>
      </div>
    </div>
  );
}
