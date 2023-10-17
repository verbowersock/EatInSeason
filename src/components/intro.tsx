import Image from 'next/image';
import React from 'react';

const Intro = () => {
  return (
    <div>
      <div className='m-auto w-full text-center text-2xl sm:text-3xl md:w-2/3 md:text-4xl lg:text-5xl lg:leading-relaxed'>
        Welcome to Eat In Season:
        <br />
        <span className='text-xl sm:text-2xl md:text-3xl lg:text-4xl'>
          Your Garden's Culinary Sidekick!
        </span>
      </div>
      <div className='text-md  py-6 md:text-lg lg:pt-10 lg:text-xl'>
        Got a garden overflowing with cucumbers, tomatoes, and more? Do the
        neighbors lock their doors and shut their curtains when you approach
        with armfuls of zucchini? Ready to turn your garden's treasures into
        mouthwatering meals? Look no further!
      </div>
      <div className='flex w-full flex-col pt-2 md:flex-row md:pt-6 lg:pt-10'>
        <div className='relative mr-10 hidden h-[600px] w-2/5 shrink-0 overflow-hidden rounded-xl  shadow-2xl md:block'>
          <Image
            src={`/assets/images/veggies-4.jpg`}
            alt={'veggies'}
            fill
            objectFit='cover'
            sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
          />
        </div>
        <div className='flex flex-col gap-4 md:justify-between '>
          <div className='flex flex-col items-center gap-3 rounded-lg border-2 border-gray-200 p-6 shadow-lg xs:flex-row'>
            <div className='m-auto flex w-20 shrink-0'>
              <div className='flex h-20 w-20 items-center justify-center rounded-full bg-slate-200 text-2xl'>
                🌿
              </div>
            </div>
            <div className='flex-1'>
              <span className='font-bold'>Garden-to-Table Magic: </span>
              Harvest your own produce, cook with garden-fresh ingredients!
              Select your garden plants in a few clicks.
            </div>
          </div>
          <div className=' flex flex-col items-center gap-3 rounded-lg border-2 border-gray-200 p-6 shadow-lg xs:flex-row'>
            <div className='m-auto flex w-20 shrink-0'>
              <div className='flex h-20 w-20 items-center justify-center rounded-full bg-slate-200 text-2xl'>
                🍽️
              </div>
            </div>
            <div>
              <span className='font-bold'>Personalized Recipes: </span>
              Our&nbsp;smart algorithm curates recipes that match your garden's
              bounty. No more waste, just culinary creativity! Save your
              favorites to find them later.
            </div>
          </div>
          <div className='flex flex-col items-center gap-3 rounded-lg border-2 border-gray-200 p-6 shadow-lg xs:flex-row'>
            <div className='m-auto flex w-20 shrink-0'>
              <div className='flex h-20 w-20 items-center justify-center rounded-full bg-slate-200 text-2xl'>
                🌽
              </div>
            </div>
            <div>
              <span className='font-bold'>Seasonal Inspiration: </span>
              We&nbsp;evolve with the seasons, serving up fresh recipes as your
              garden blooms throughout the year.
            </div>
          </div>
          <div className='flex flex-col items-center gap-3 rounded-lg border-2 border-gray-200 p-6 shadow-lg xs:flex-row'>
            <div className='m-auto flex w-20 shrink-0'>
              <div className='flex h-20 w-20 items-center justify-center rounded-full bg-slate-200 text-2xl'>
                📱
              </div>
            </div>
            <div>
              <span className='font-bold'>Mobile Convenience: </span>
              <br /> Access Eat In Season on your phone or tablet, whether
              you're in the garden, the store, or the kitchen.
            </div>
          </div>
        </div>
      </div>
      <div className='pt-10 text-center text-lg md:text-xl'>
        Join Eat In Season and turn your garden into a culinary wonderland.
        <br />
        Start now, and let the delicious adventures begin!
      </div>
    </div>
  );
};

export default Intro;
