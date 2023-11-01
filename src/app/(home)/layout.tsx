import '../globals.css';
import type { Metadata } from 'next';
import Hero from '@/components/navigation/Hero';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Eat in Season',
  description: 'Not another recipe app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className='flex min-h-screen flex-col'>
      <Hero />
      <div className='flex-1'>{children}</div>
      <Footer />
    </div>
  );
}
