import Item from './Item';

const LateralNav = () => {
  return (
    <div className='hidden md:block w-[300px] bg-dark-bg border-r border-primary-600 p-3 m-0'>
      <Item title='Comenzando'></Item>
      <div className='flex h-full'>
        <div className='w-1 h-5 bg-accent-300'></div>
        <div className={`flex flex-col flex-1 pl-4 h-full`}>
          <span className='text-primary-300 font-medium underline underline-offset-4'>
            ¿Qué es Axum?
          </span>
          <span className='text-gray-200 font-normal'>Test</span>
          <span>Test</span>
          <span>Test</span>
          <span>Test</span>
          <span>Test</span>
        </div>
      </div>
    </div>
  );
};

export default LateralNav;
