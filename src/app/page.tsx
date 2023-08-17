import Hero from '@/components/hero';
import React from 'react';
import { options } from './api/auth/[...nextauth]/options';
import { getServerSession } from 'next-auth/next';

const HomePage = async () => {
  const session = await getServerSession(options);
  return (
    <>
      <Hero />
      {session ? <p>Logged in</p> : <p>Not logged in</p>}
    </>
  );
};

export default HomePage;
