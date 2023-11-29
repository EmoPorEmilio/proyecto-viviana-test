import Image from 'next/image';
import EventImage from './event.jpg';
import { Chip, ChipType } from '@/components/Chip';

export const Card1 = () => (
  <div className='w-[240px] h-[300px] bg-bg-300 rounded-3xl border-b-2 border-accent-500'>
    <div className='w-full h-[230px] bg-bg-200 rounded-t-3xl'>
      <div className='relative border-accent-200 w-full h-full bg-white bg-opacity-20 rounded-t-xl overflow-hidden'>
        <div className=' z-10 absolute bottom-0 left-0 w-[240px] h-full bg-gradient-to-b from-transparent from-60% to-bg-300'>
          <div className='flex w-full h-full flex-col justify-end p-3'>
            <span className='text-white font-semibold drop-shadow-title-primary text-2xl '>
              Fiesta de Taylor 2021 todos invitados
            </span>
          </div>
        </div>
        <Image
          alt='event'
          src={EventImage}
          fill={true}
          style={{ objectFit: 'cover' }}
        />
      </div>
    </div>
    <div className='w-full h-[69px] border-t-2 border-primary-800 bg-bg-300 rounded-b-3xl flex flex-col'>
      <div className='flex flex-1 justify-center gap-1 items-center'>
        <Chip type={ChipType.Primary} text='Fiesta' />
        <Chip type={ChipType.Primary} text='Presencial' />
        <Chip type={ChipType.Primary} text='..' />
      </div>
      <div className='flex flex-1'></div>
    </div>
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
