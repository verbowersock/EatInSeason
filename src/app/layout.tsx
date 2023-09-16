import './globals.css';
import type { Metadata } from 'next';
import Navigation from '@/components/nav';
import { ClerkProvider } from '@clerk/nextjs';
import { main, heading } from './utils/fonts';

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
    <html lang='en'>
      <body className={`${main.variable} ${heading.variable}`}>
        <ClerkProvider>
          <Navigation />
          {children}
        </ClerkProvider>
      </body>
    </html>
  );
}
