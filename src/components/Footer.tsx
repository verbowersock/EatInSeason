import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <div className='h-fit w-full bg-black'>
      <div className='m-auto flex h-fit max-w-7xl flex-row place-content-between items-center px-10 py-4'>
        <Link href='/' className='font-head text-6xl text-white'>
          Eat in season
        </Link>

        <div className='flex flex-col '>
          <Link href='/about' className='nav_button'>
            About us
          </Link>
          <Link href='/contact' className='nav_button'>
            Contact
          </Link>
          <div className='pt-2 text-sm text-white'>
            &copy; 2023 Eat In Season by Veronika Bowersock
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
