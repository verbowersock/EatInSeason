import '../globals.css';
import type { Metadata } from 'next';
import SmallHeader from '@/components/navigation/SmallHeader';
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
      <SmallHeader />
      <div className='flex-1'>{children}</div>
      <Footer />
    </div>
  );
}
