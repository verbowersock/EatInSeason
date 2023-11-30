'use client';

import React, { Suspense } from 'react';
import { SignedIn, SignedOut } from '@clerk/nextjs';
import dynamic from 'next/dynamic';
import RecommendedRecipes from './RecommendedRecipes';
import Intro from './intro';

//import appid and appkey from .env

const Main = () => {
  return (
    <section className='m-auto w-full px-4 py-10 text-left lg:p-10 xl:w-4/5'>
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
