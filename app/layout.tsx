import type { Metadata } from 'next';
import { Jost } from 'next/font/google';
import './globals.css';

const jost = Jost({ subsets: ['latin'] });

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
      <body className={`${jost.className} bg-bg m-0 h-screen`}>{children}</body>
    </html>
  );
}
