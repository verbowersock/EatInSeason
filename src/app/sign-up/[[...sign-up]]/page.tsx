import React from 'react';
import { SignUp } from '@clerk/nextjs';

const SignUpPage = () => {
  return (
    <div className='container mx-auto'>
      <div className='flex min-h-screen items-center  justify-center'>
        <SignUp />
      </div>
    </div>
  );
};

export default SignUpPage;
