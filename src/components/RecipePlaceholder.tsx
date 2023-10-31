import React from 'react';

const RecipePlaceholder = () => (
  <div className='relative m-auto mt-10 flex h-fit w-full max-w-4xl flex-grow-0 animate-pulse flex-col justify-between overflow-hidden rounded-3xl border-2 border-gray-300 sm:w-2/3 md:h-128 md:w-full md:flex-row'>
    <div className='relative h-48 w-full flex-shrink-0 overflow-hidden bg-gray-300 sm:h-80 md:h-full md:w-6/12'></div>
    <div className='flex h-48 flex-1 flex-col gap-4 bg-white'>
      <div className=' w-full self-center'>
        <div className='flex h-24 items-center justify-center'>
          <div className='h-14 w-2/3 rounded-3xl bg-gray-300'></div>
        </div>
      </div>
      <div className='mb-4 flex h-14 w-full flex-row justify-evenly'>
        <div className='h-8 w-1/4 rounded-3xl bg-gray-300'></div>
        <div className='h-8 w-1/4 rounded-3xl bg-gray-300'></div>
        <div className='h-8 w-1/4 rounded-3xl bg-gray-300'></div>
      </div>
      <div className='mb-8 flex w-full flex-1 flex-col justify-center gap-4 bg-white pl-10 pt-2 sm:gap-8'>
        <div className='h-8 w-1/2 rounded-3xl bg-gray-300'></div>
        <div className='h-8 w-2/3 rounded-3xl bg-gray-300'></div>
        <div className='h-8 w-1/3 rounded-3xl bg-gray-300'></div>
        <div className='h-8 w-2/3 rounded-3xl bg-gray-300'></div>
        <div className='h-8 w-1/3 rounded-3xl bg-gray-300'></div>
      </div>
    </div>
  </div>
);

export default RecipePlaceholder;
