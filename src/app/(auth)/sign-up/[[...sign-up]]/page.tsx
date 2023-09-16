'use client';

import Login from '@/components/login';
import { SignUp, useUser } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';

const SignupPage = () => {
  const { isLoaded, isSignedIn } = useUser();
  const router = useRouter();

  // Redirect the user if they are already authenticated
  if (isLoaded && isSignedIn) router.replace('/');

  return <Login child={<SignUp />} />;
};

export default SignupPage;
