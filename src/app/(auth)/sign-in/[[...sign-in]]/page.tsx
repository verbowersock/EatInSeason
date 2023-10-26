'use client';

import Login from '@/components/login';
import { SignIn, useUser } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';

const LoginPage = () => {
  const { isLoaded, isSignedIn } = useUser();
  const router = useRouter();

  // Redirect the user if they are already authenticated
  if (isLoaded && isSignedIn) router.replace('/');

  return <Login child={<SignIn />} />;
};

export default LoginPage;
