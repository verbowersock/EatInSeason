'use client';

import React from 'react';
import Navigation from './Nav';
import Image from 'next/image';

const Hero = () => {
  return (
    <section>
      <div className='relative z-0 h-60 w-full md:h-96'>
        <Image
          src='/assets/images/vegetables.jpg'
          priority
          layout='fill'
          objectFit='cover'
          alt='hero image'
          placeholder="blur"
          blurDataURL='/assets/images/vegetables-small.jpg'
        />
        {/*overlay*/}
         <div className='absolute left-0 top-0 h-full w-full bg-gradient-to-r  from-black/75 from-20% via-white/10 via-60% to-black/70 to-80%'>*/}
        {/*heading*/}
        <div className='m-auto flex h-full w-3/4 items-end'>
          <h1 className='mx-3 pb-5 font-head text-6xl text-white md:text-9xl'>
            Eat in Season
          </h1>
          <Navigation />
        </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
