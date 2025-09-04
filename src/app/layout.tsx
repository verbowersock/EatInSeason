import './globals.css';
import type { Metadata } from 'next';
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
    <ClerkProvider
      signInFallbackRedirectUrl='/'
      signUpFallbackRedirectUrl='/'
      signInForceRedirectUrl='/'
      signUpForceRedirectUrl='/'
    >
      {children}
    </ClerkProvider>
  );
}
