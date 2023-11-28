import LateralNav from '@/components/Lateral-Nav';
import Dialog from '@/components/Chip/Dialog';
import { Card1, Card2 } from '@/components/Card';
import Badge from '@/components/Badge';
import { Button, ButtonType } from '@/components/Button';
import Switch from '@/components/Switch';
import { HamburgerMenuIcon } from '@/components/Icon';
import { IconType } from '../types';
import { Alert, AlertType } from '../Alert';

const Content = () => {
  return (
    <div className='bg-bg-100 flex h-full'>
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
        <div className=''>
          <Card1 />
        </div>
        <br />
        <Dialog />
        <div className='flex flex-wrap justify-center gap-5'>
          <Button
            type={ButtonType.Primary}
            onClick={() => {
              console.log('test1');
            }}>
            ME INTERESA
          </Button>
          <Button
            type={ButtonType.Secondary}
            onClick={() => {
              console.log('test1');
            }}>
            <span className='w-auto'>SALÍ DE ACÁ</span>
          </Button>
          <Button
            type={ButtonType.Danger}
            onClick={() => {
              console.log('test1');
            }}>
            <span className='w-auto'>ELIMINAR</span>
          </Button>
          <Button
            type={ButtonType.Success}
            onClick={() => {
              console.log('test1');
            }}>
            <span className='w-auto'>GUARDAR</span>
          </Button>
          <Button
            type={ButtonType.Link}
            onClick={() => {
              console.log('test1');
            }}>
            <a href='/test' className='w-auto'>
              BOTÓN LINK
            </a>
          </Button>
        </div>
        <br />
        <Switch />
        <div className='flex flex-wrap justify-center gap-5'>
          <HamburgerMenuIcon type={IconType.FULL} size={16} />
          <HamburgerMenuIcon type={IconType.OUTLINE} size={16} />
          <HamburgerMenuIcon type={IconType.BORDERLESS} size={16} />
        </div>
        <br />
        <div className=''>
          <Alert type={AlertType.Primary} onClick={() => console.log('test')}>
            Esto es un ejemplo de alerta.
          </Alert>
          <br />
          <Alert type={AlertType.Secondary} onClick={() => console.log('test')}>
            Esto es un ejemplo de alerta.
          </Alert>
          <br />
          <Alert type={AlertType.Danger} onClick={() => console.log('test')}>
            Esto es un ejemplo de alerta.
          </Alert>
          <br />
          <Alert type={AlertType.Success} onClick={() => console.log('test')}>
            Esto es un ejemplo de alerta.
          </Alert>
        </div>
        <br />
        <div className=''>
          <Badge />
        </div>
      </div>
      <LateralNav transparent={true} />
    </div>
  );
};

export default Content;
