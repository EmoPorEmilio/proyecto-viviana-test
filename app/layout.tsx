import type { Metadata } from 'next';
import './globals.css';
import { jost } from '@/components/fonts';

export const metadata: Metadata = {
  title: 'Docs Proyecto Viviana',
  description:
    'Template para crear docs con Next.js, TailwindCSS, MDX y Proyecto Vivana Design System',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={`${jost.className} bg-bg-100 m-0 h-screen`}>
        {children}
      </body>
    </html>
  );
}
