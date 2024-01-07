import Content from '@/components/Content';
import Header from '@/components/Header';

export const runtime = 'edge';

export default function Home() {
  return (
    <>
      <Header />
      <Content />
    </>
  );
}
