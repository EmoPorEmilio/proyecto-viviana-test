import LateralNav from '@/components/Lateral-Nav';
import Dialog from '@/components/Dialog';
import { Button, ButtonType } from '@/components/Button';
import { Chip, ChipType } from '@/components/Chip';

const Content = () => {
  return (
    <div className='bg-bg flex h-full'>
      <LateralNav />
      <div className='flex flex-col flex-1 p-10'>
        <Dialog />
        <div></div>
      </div>
    </div>
  );
};

export default Content;
