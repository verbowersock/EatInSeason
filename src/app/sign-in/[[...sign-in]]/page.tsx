import React from 'react';
import { SignIn } from '@clerk/nextjs';

const SignInPage = () => {
  return (
    <div className='container mx-auto'>
      <div className='flex min-h-screen items-center  justify-center'>
        <SignIn />
      </div>
    </div>
  );
};

export default SignInPage;
