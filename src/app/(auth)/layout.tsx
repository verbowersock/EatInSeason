//import '../globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sign up for Eat in Season',
  description: 'Sign up page for eat in Season',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  );
}
