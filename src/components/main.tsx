'use client';

import React from 'react';
import { SignedIn, SignedOut } from '@clerk/nextjs';
import dynamic from 'next/dynamic';

const RecommendedRecipes = dynamic(() => import('./RecommendedRecipes'), {
  ssr: false,
});
const Intro = dynamic(() => import('./intro'), {
  ssr: false,
});

//import appid and appkey from .env

const Main = () => {
  return (
    <section className='m-auto w-full px-4 py-10 text-left lg:p-20 xl:w-3/4'>
      <SignedIn>
        <RecommendedRecipes />
      </SignedIn>
      <SignedOut>
        <Intro />
      </SignedOut>
    </section>
  );
};

export default Main;
