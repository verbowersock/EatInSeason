'use client';

import React from 'react';
import { SignedIn, SignedOut } from '@clerk/nextjs';

import { usePlantStore } from '@/stores/plantStore';

import Intro from './intro';
import RecommendedRecipes from './RecommendedRecipes';
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
