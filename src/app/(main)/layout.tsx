import '../globals.css';
import type { Metadata } from 'next';
import SmallHeader from '@/components/navigation/SmallHeader';

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
    <>
      <SmallHeader />
      {children}
    </>
  );
}
