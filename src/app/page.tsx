import Hero from '@/components/hero';
import { auth } from '@clerk/nextjs';
import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
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
