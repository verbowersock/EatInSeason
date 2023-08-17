'use client';

import React from 'react';
import { SignedIn, SignedOut } from '@clerk/nextjs';

const Main = () => {
  return (
    <>
      <SignedIn>
        {/* Mount the UserButton component */}
        <p>Signed In</p>
      </SignedIn>
      <SignedOut>
        {/* Signed out users get sign in button */}
        Signed Out
      </SignedOut>
      ;
    </>
  );
};

export default Main;
