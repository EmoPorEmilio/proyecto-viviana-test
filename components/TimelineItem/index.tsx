import { Icon } from '@/components/Icon';
import { MdFavorite } from 'react-icons/md';
import { IconType } from '../types';
import Avatar from '@/components/Avatar';
import { sen, jost } from '@/app/fonts';

const TimelineItem = () => {
  return (
    <div className='flex flex-col gap-5'>
      <div className='flex justify-center items-center gap-3'>
        <Avatar />
        <Icon icon={MdFavorite} type={IconType.FULL} size='30px' />
        <Avatar />
      </div>
      <div className='flex justify-center items-center gap-3'>
        <span className={`${sen.className} text-primary-300 font-light`}>
          <span className={`${jost.className} font-semibold text-accent-200`}>
            emoporemilio
          </span>{' '}
          ha empezado a seguir a{' '}
          <span className={`${jost.className}  font-semibold text-accent-200`}>
            taylorswift
          </span>
        </span>
      </div>
    </div>
  );
};

export default TimelineItem;
