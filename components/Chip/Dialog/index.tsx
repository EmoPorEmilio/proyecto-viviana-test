import { sen } from '@/app/fonts';
import { Button, ButtonType } from '@/components/Button';
import { Chip, ChipType } from '@/components/Chip';

const Dialog = () => (
  <div className='flex flex-col md:w-[540px] h-[380px]'>
    <span className='relative top-4 left-8 text-4xl font-extrabold text-transparent	bg-clip-text bg-gradient-to-b from-primary-100 to-primary-500'>
      main.rs
    </span>
    <div className='flex flex-col md:w-[500px] justify-end h-[50px] rounded-t-[26px] bg-primary-800 '>
      <div className='flex flex-col justify-end h-[40px] rounded-t-[30px] bg-primary-600'>
        <div className='flex items-center justify-end h-[20px] rounded-t-[100px] bg-primary-700 pr-4'>
          <span className='text-primary-300 text-base font-regular'>
            Emo - 16/4/22
          </span>
        </div>
      </div>
    </div>
    <div className='flex flex-col mt-1 md:w-[500px] h-[300px] rounded-t-lg rounded-b-[26px] bg-bg-300 border-accent-500 border-solid border-b'>
      <div className='flex flex-col flex-1 p-4'>
        <span className={`${sen.className} text-gray-100 text-lg`}>
          Esto es un test de texto! Esto es un test de texto!
        </span>
        <div className='flex flex-1 flex-row py-5 justify-center gap-5 items-end'>
          <Button
            type={ButtonType.Secondary}
            onClick={() => {
              console.log('test1');
            }}>
            <span className='w-auto'>SALÍ DE ACÁ</span>
          </Button>
          <Button
            type={ButtonType.Primary}
            onClick={() => {
              console.log('test1');
            }}>
            ME INTERESA
          </Button>
        </div>
      </div>
    </div>
    <div className='relative bottom-4 right-4 md:w-[500px]'>
      <div className='flex flex-row justify-end gap-2 pr-4'>
        <Chip
          type={ChipType.Primary}
          onClick={() => {
            console.log('test1');
          }}>
          <span>Fiesta</span>
        </Chip>
      </div>
    </div>
  </div>
);

export default Dialog;
