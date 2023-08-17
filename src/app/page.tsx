import Hero from '@/components/hero';
import { auth } from '@clerk/nextjs';
import React from 'react';

import Main from '@/components/main';

const HomePage = () => {
  return (
    <>
      <Hero />
      <Main />
    </>
  );
};

export default HomePage;
