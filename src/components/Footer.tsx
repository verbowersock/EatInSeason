import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <div className='mt-10 h-fit w-full bg-black'>
      <div className='m-auto flex h-fit max-w-7xl flex-row place-content-between items-center p-4 md:px-10 md:py-4'>
        <Link href='/' className='font-head text-6xl text-white'>
          Eat in season
        </Link>

        <div className='flex flex-col items-end'>
          <Link href='/about' className='nav_button'>
            About us
          </Link>
          <Link href='/contact' className='nav_button'>
            Contact
          </Link>
          <div className='items-end pt-2 text-center text-xs text-white sm:text-sm'>
            &copy; 2023 Eat In Season by Veronika Bowersock
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
