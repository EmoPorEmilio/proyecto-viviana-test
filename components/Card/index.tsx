import Image from 'next/image';
import EventImage from './event.jpg';

export const Card1 = () => (
  <div className='w-[240px] h-[300px] bg-bg-300 rounded-3xl border-b-2 border-accent-500'>
    <div className='w-full h-[200px] bg-bg-200 rounded-t-3xl p-3'>
      <div className='relative  w-full h-full bg-white bg-opacity-20 rounded-3xl overflow-hidden'>
        <Image src={EventImage} fill={true} style={{ objectFit: 'cover' }} />
      </div>
    </div>
    <div className='w-full h-[99px] border-t-2 border-primary-800 bg-bg-300 rounded-b-3xl'></div>
  </div>
);

export const Card2 = () => (
  <div className='w-[240px] h-[300px] bg-bg-300 rounded-3xl border-b-2 border-accent-500'>
    <div className='w-full h-[200px] bg-bg-200 rounded-t-3xl p-3'>
      <div className='w-full h-full bg-white bg-opacity-20 rounded-3xl'></div>
    </div>
    <div className='w-full h-[99px] border-t-2 border-primary-800 bg-bg-300 rounded-b-3xl'></div>
  </div>
);
