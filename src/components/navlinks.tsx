import Link from 'next/link';
import React from 'react';

type NavlinksProps = {
  open?: boolean;
};

const Navlinks = ({ open }: NavlinksProps) => {
  console.log('open', open);
  return (
    <div className='flex w-full flex-col justify-between md:flex-row'>
      <div
        className={`flex md:flex-row md:justify-between ${
          open ? 'my-6 ml-10 flex-col space-y-6 pt-12 ' : 'flex-row'
        }`}
      >
        <Link
          href='/signup'
          className='nav_button bg-leafyGreen rounded-md px-4 text-black duration-300 ease-in-out hover:scale-110 hover:transform'
        >
          Sign Up
        </Link>
        <Link href='/login' className='nav_button'>
          Login
        </Link>
      </div>
      <hr
        className={`${
          open ? 'block' : 'hidden'
        } bg-leafyGreen/30 my-2 h-px border-0 `}
      />
      <div
        className={`${open ? 'mt-6' : 'mt-0'}
        ml-10 mt-6 flex flex-col space-y-6 md:ml-0 md:mt-0 md:flex-row  md:space-x-10 md:space-y-0`}
      >
        <Link
          href='/about'
          className={`nav_button ${open ? 'block' : 'hidden'} md:block`}
        >
          About us
        </Link>
        <Link
          href='/contact'
          className={`nav_button ${open ? 'block' : 'hidden'} md:block`}
        >
          Contact
        </Link>
      </div>
    </div>
  );
};

export default Navlinks;
