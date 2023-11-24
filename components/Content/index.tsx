import LateralNav from '@/components/Lateral-Nav';
import Dialog from '@/components/Dialog';
import { Button, ButtonType } from '@/components/Button';
import { Chip, ChipType } from '@/components/Chip';

const Content = () => {
  return (
    <div className='bg-bg flex h-full'>
      <LateralNav />
      <div className='flex flex-col justify-center flex-1'>
        <Dialog />
        <div></div>
      </div>
    </div>
  );
};

export default Content;
