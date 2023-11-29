import Image from 'next/image';
import EventImage from './event.jpg';
import { Chip, ChipType } from '@/components/Chip';
import { MdOutlineAccessTime, MdAlternateEmail } from 'react-icons/md';
import { HiFire } from 'react-icons/hi';

export const Card1 = () => (
  <div className='flex flex-col justify-center items-center w-[240px] h-[250px] rounded-3xl border-b border-accent-500'>
    <div className='w-full h-full rounded-t-3xl'>
      <div className='relative border-accent-200 w-full h-full bg-white rounded-t-3xl'>
        <div className='z-10 w-9 absolute right-[-15px] bg-opacity-20 h-full'>
          <div className='flex flex-col w-full h-full items-center'>
            <HiFire className='text-red-600' size='40px' />
          </div>
        </div>
        <div className=' z-10 absolute bottom-0 left-0 w-[240px] h-full bg-gradient-to-b from-transparent from-20% to-90% to-bg-400'>
          <div className='flex w-full h-full flex-col items-center justify-end px-3 pb-2'>
            <span className='text-white font-bold text-xl drop-shadow-title-card text-center'>
              Fiesta de Taylor 2021 todos invitados
            </span>
          </div>
        </div>
        <Image
          alt='event'
          src={EventImage}
          fill={true}
          style={{ objectFit: 'cover', borderRadius: '24px' }}
        />
      </div>
    </div>
    <div className='flex border-t border-primary-800 border-opacity-30 w-full flex-col items-center self-center justify-center h-[46px] bg-bg-400 rounded-b-3xl'>
      <div className='flex flex-1 justify-center gap-8 items-center'>
        <div className='flex w-full h-full flex-1 justify-end items-center gap-1'>
          <div className='flex items-center gap-[2px]'>
            <MdAlternateEmail className='text-primary-700' />
            &nbsp;
            <span className='font-semibold text-primary-300'>TaylorSwift</span>
          </div>
        </div>
        <div className='flex w-full h-full flex-1 justify-start items-center '>
          <div className='flex items-center gap-[2px]'>
            <MdOutlineAccessTime className='text-primary-700' />
            &nbsp;
            <span className='font-semibold text-accent-200'>
              <b>2</b> días
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export const Card2 = () => (
  <div className='w-[240px] h-[300px] bg-bg-300 rounded-3xl border-b border-accent-500'>
    <div className='w-full h-[200px] bg-bg-200 rounded-t-3xl p-3'>
      <div className='w-full h-full bg-white bg-opacity-20 rounded-3xl'></div>
    </div>
    <div className='w-full h-[99px] border-t-2 border-accent-200 bg-bg-300 rounded-b-3xl'></div>
  </div>
);
