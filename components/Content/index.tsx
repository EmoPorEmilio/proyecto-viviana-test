import LateralNav from '@/components/Lateral-Nav';
import Dialog from '@/components/Dialog';

const Content = () => {
  return (
    <div className='bg-bg flex h-full'>
      <LateralNav />
      <div className='flex flex-col md:p-9 p-4 flex-1'>
        <h1 className='font-semibold text-primary-100 text-4xl drop-shadow-title-primary'>
          ¿Qué es Axum?
        </h1>
        <br />
        <span className='text-lg text-primary-300'>
          Este es un ejemplo de documentación.
        </span>
        <br />
        <br />
        <Dialog />
        <div></div>
      </div>
    </div>
  );
};

export default Content;
