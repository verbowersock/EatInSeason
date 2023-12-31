'use client';
import Link from 'next/link';
import React from 'react';
import { SignedIn, SignedOut } from '@clerk/nextjs';
import { usePathname } from 'next/navigation';
import dynamic from 'next/dynamic';

const AuthLinks = dynamic(() => import('./Authlinks'), {
  ssr: false,
});

export type ModalProps = {
  open: boolean;
  onClose: () => void;
};

const Navlinks = ({ open, onClose }: ModalProps) => {
  const pathname = usePathname();
  return (
    <div className='z-30 flex w-full flex-col-reverse justify-between md:box-border md:grid md:h-full md:grid-cols-3'>
      <div
        className={`${open ? 'mt-6' : 'mt-0'}
        ml-10 mt-6 flex flex-col justify-between space-y-4 md:col-start-1 md:m-0 md:ml-0 md:flex md:flex-row md:items-center md:space-x-2 md:space-y-0 md:px-10`}
      >
        <SignedOut>
          <Link
            href='/about'
            className={`nav_button ${open ? 'block' : 'hidden'} md:block`}
            onClick={onClose}
          >
            About us
          </Link>
          <Link
            href='/contact'
            className={`nav_button ${open ? 'block' : 'hidden'} md:block`}
            onClick={onClose}
          >
            Contact
          </Link>
        </SignedOut>

        <SignedIn>
          <Link
            href='/plants'
            className={`nav_button ${open ? 'block' : 'hidden'} md:flex `}
            onClick={onClose}
          >
            Your Plants
          </Link>

          <Link
            href='/recipes'
            className={`nav_button ${open ? 'block' : 'hidden'} md:flex`}
            onClick={onClose}
          >
            Your Recipes
          </Link>
          <Link
            href='/'
            className={`nav_button ${open ? 'block' : 'hidden'} md:flex`}
            onClick={onClose}
          >
            Recipe Finder
          </Link>
        </SignedIn>
        <Link
          href='/'
          className={`nav_button ${open ? 'block' : 'hidden'} md:hidden`}
          onClick={onClose}
        >
          Home
        </Link>
      </div>
      <div
        id='col-2'
        className='flex md:col-start-2 md:items-center md:justify-center'
      >
        {pathname !== '/' && (
          <Link
            href='/'
            className='nav_button hidden font-head !text-5xl md:block'
            onClick={onClose}
          >
            Eat In Season
          </Link>
        )}
      </div>
      <hr
        className={`${
          open ? 'block' : 'hidden'
        } my-2 h-px border-0 bg-leafyGreen/30`}
      />
      <div
        id='col-3'
        className='z-30 flex md:col-start-3 md:items-center md:justify-end md:space-x-4'
      >
        <AuthLinks open={open} onClose={onClose} />
      </div>
    </div>
  );
};

export default Navlinks;
