import Image from 'next/image';
import React from 'react';
import { Courgette } from 'next/font/google';

const main = Courgette({ weight: '400', subsets: ['latin'] });
const Hero = () => {
  return (
    <section id='hero'>
      <div className='relative h-60 w-full md:h-96'>
        {/*overlay*/}
        <div className='absolute left-0 top-0 h-full w-full bg-gradient-to-r  from-black/75 from-20% via-white/10 via-60% to-black/70 to-80%'>
          {/*heading*/}
          <h1 className='heading_text absolute bottom-0 left-0 mx-3 pb-5 text-6xl text-white md:text-9xl'>
            Eat in Season
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Hero;
