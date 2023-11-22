import LateralNav from '@/components/Lateral-Nav';
import Code from '@/components/Code';

const Content = () => {
  return (
    <div className='bg-bg flex h-full'>
      <LateralNav />
      <div className='flex flex-1 p-10'>
        <Code />
      </div>
    </div>
  );
};

export default Content;
